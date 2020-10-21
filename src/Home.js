import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					alt="Try free for 30 days. Prime Video. Restrictions apply."
					src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_3000x1200_Final_en-CA_FT_PVD5581._CB403140241_.jpg"
				></img>

				<div className="home__row">
					<Product
						id="1221456"
						title="SYLVANIA Smart+ WiFi Full Color Dimmable A19 LED Light Bulb"
						price={62.3}
						image="https://m.media-amazon.com/images/I/41NU-LgtriL._AC_SY322_.jpg"
						rating={5}
					/>
					<Product
						id="1234789"
						title="Zinus Modern Studio 10 Inch Platforma"
						price={123.97}
						image="https://m.media-amazon.com/images/I/51yIdKWQTeL._AC_SY322_.jpg"
						rating={4}
					/>
					<Product
						id="14214569"
						title="Arlo Video Doorbell | HD Video, Weather-Resistant, 2-Way Audio"
						price={158.93}
						image="https://m.media-amazon.com/images/I/31ne12WTaUL._AC_SY322_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="8521478"
						title="Arlo Essential Spotlight Camera | Wire-Free, 1080p Video"
						price={169.99}
						image="https://m.media-amazon.com/images/I/31L79Ulfw6L._AC_SY322_.jpg"
						rating={5}
					/>
					<Product
						id="23601254"
						title="Streamlight 66604 MicroStream USB "
						price={158.93}
						image="https://m.media-amazon.com/images/I/41Sp0fOWcbL._AC_SY161_.jpg"
						rating={3}
					/>

					{/*2 */}
				</div>
				<div className="home__row">
					<Product
						id="456982364"
						title="Nikon D3500 AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Kit"
						price={599.95}
						image="https://m.media-amazon.com/images/I/41TzqWwOStL._AC_SY322_.jpg"
						rating={5}
					/>
					<Product
						id="124578965"
						title="Razer BlackWidow V3 Pro Mechanical Wireless Gaming Keyboard "
						price={319.99}
						image="https://m.media-amazon.com/images/I/41USbZ963dL._AC_SR320,320_.jpg"
						rating={5}
					/>
					<Product
						id="365214587"
						title="JBL JBLCHARGE4GRYAM Charge 4 Waterproof Portable Bluetooth Speaker - Gray"
						price={239.98}
						image="https://images-na.ssl-images-amazon.com/images/I/71nluqY5jgL._AC_UL320_SR320,320_.jpg"
						rating={5}
					/>

					{/** 
					<Product
						title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
						price={54.99}
						image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UL320_.jpg"
						rating={5}
					/>*/}

					{/*4 */}
				</div>
			</div>
		</div>
	);
}

export default Home;
