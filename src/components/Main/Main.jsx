import { useContext, useRef, useEffect } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../Context/Context";

const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
		audioSrc, // Access audioSrc from context
	} = useContext(Context);

	const canvasRef = useRef(null);

	const handleCardClick = (promptText) => {
		setInput(promptText);
	};

	// Visualize the audio on canvas
	const visualizeAudio = () => {
		if (!audioSrc) return;
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const audio = new Audio(audioSrc);
		const audioContext = new (window.AudioContext || window.webkitAudioContext)();
		const analyser = audioContext.createAnalyser();
		const source = audioContext.createMediaElementSource(audio);
		source.connect(analyser);
		analyser.connect(audioContext.destination);
		
		analyser.fftSize = 2048;
		const bufferLength = analyser.frequencyBinCount;
		const dataArray = new Uint8Array(bufferLength);
		
		const draw = () => {
			analyser.getByteTimeDomainData(dataArray);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.lineWidth = 2;
			ctx.strokeStyle = "#00ff00";
			ctx.beginPath();
			
			const sliceWidth = (canvas.width * 1.0) / bufferLength;
			let x = 0;

			for (let i = 0; i < bufferLength; i++) {
				const v = dataArray[i] / 128.0;
				const y = (v * canvas.height) / 2;
				if (i === 0) {
					ctx.moveTo(x, y);
				} else {
					ctx.lineTo(x, y);
				}
				x += sliceWidth;
			}
			ctx.lineTo(canvas.width, canvas.height / 2);
			ctx.stroke();
			requestAnimationFrame(draw);
		};
		draw();
		audio.play();
	};

	useEffect(() => {
		visualizeAudio();
	}, [audioSrc]);

	return (
		<div className="main">
			<div className="nav">
				<img src={assets.user} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello, Nitin</span>
							</p>
							<p>Let's Beat Everyone</p>
						</div>
						<div className="cards">
							<div className="card" onClick={() => handleCardClick("Suggest Me Some Beats")}>
								<p>Suggest Me Some Beats</p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div className="card" onClick={() => handleCardClick("Create a Lofi Beat")}>
								<p>Create a Lofi Beat</p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div className="card" onClick={() => handleCardClick("Modify Living House Beat By Making It Faster")}>
								<p>Modify Living House Beat By Making It Faster</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div className="card" onClick={() => handleCardClick("Make a Beat Using Drum")}>
								<p>Make a Beat Using Drum</p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<>
									<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
									{audioSrc && (
										<div className="audio-container">
										<canvas ref={canvasRef} width="300" height="100"></canvas>
										<div className="audio-controls">
											<button 
												onClick={() => new Audio(audioSrc).play()} 
												className="audio-button">
												<img src="src/assets/play-icon.png" alt="Play" className="button-icon" />
											</button>
											<button 
												onClick={() => new Audio(audioSrc).pause()} 
												className="audio-button">
												<img src="src/assets/pause-icon.png" alt="Pause" className="button-icon" />
											</button>
											<a href={audioSrc} download="generated_audio.mp3">
												<button className="audio-button">
													<img src="src/assets/download-icon.png" alt="Download" className="button-icon" />
												</button>
											</a>
										</div>
									</div>
									)}
								</>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => setInput(e.target.value)}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							<img src={assets.send_icon} alt="" onClick={() => onSent(input)} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
