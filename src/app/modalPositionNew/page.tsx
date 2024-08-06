"use client"

import Modal from "@components/modal/Modal";
import "./page.css"
import useModalToggleClick from "../../hooks/useModalToggleClick";
const Home = () => {

    const { modalActive, setModalActive } = useModalToggleClick();

	return (
		<>
			<section id="top-1" style={{ display: "none" }}>
				<a href="https://mobirise.com/builder/ai-website-creator.html">
					AI Website Creator
				</a>{" "}
				Mobirise v5.8.23{" "}
				<a href="https://mobirise.com/drag-drop-website-builder.html">
					drag and drop website builder
				</a>
			</section>
			<section
				data-bs-version="5.1"
				className="menu menu01 legalm5 cid-u4nrCoRRWb"
				id="menu01-0"
			>
			</section>
			<section
				data-bs-version="5.1"
				className="header02 carem5 cid-u4nrCxQQ3w mbr-parallax-background"
				id="header02-1"
				style={{ zIndex: 0, backgroundImage: "none", position: "relative" }}
			>
				<div
					className="mbr-overlay"
					style={{ opacity: "0.5", backgroundColor: "rgb(0, 0, 0)" }}
				/>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-10">
							<div className="content-wrapper">
								<p className="mbr-desc mbr-fonts-style display-4">
									<strong>HARMONY WITH NATURE</strong>
								</p>
								<h1 className="mbr-section-title mbr-fonts-style display-1">
									<strong>Natural Cosmetics</strong>
								</h1>
								<div className="mbr-section-btn">
									<a className="btn btn-secondary display-4" onClick={() => {setModalActive(true)}}>
										View more
									</a>
									<Modal bgColor='#000000bb' modalActive={modalActive} setModalActive={setModalActive}></Modal>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					id="jarallax-container-0"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						overflow: "hidden",
						zIndex: -100
					}}
				>
					<div id="picture-manual"
						style={{
							backgroundPosition: "50% 50%",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
							backgroundImage:
								'url("https://mobirise.com/extensions/carem5/natural-cosmetics/assets/images/background1.jpg")',
							position: "absolute",
							top: 0,
							left: 0,
							width: 412,
							height: "713.231px",
							overflow: "hidden",
							pointerEvents: "none",
							transformStyle: "preserve-3d",
							backfaceVisibility: "hidden",
							willChange: "transform, opacity",
							marginTop: "100.884px",
							transform: "translate3d(0px, -136.884px, 0px)"
						}}
					/>
				</div>
			</section>
			<section
				data-bs-version="5.1"
				className="features01 carem5 cid-u4nrCS26bd"
				id="features01-2"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="items-wrapper">
								<div className="item features-image">
									<div className="item-wrapper">
										<div className="item-img">
											<img
												src="assets/images/image5.jpg"
												alt="Mobirise Website Builder"
											/>
										</div>
										<div className="item-content card">
											<h4 className="item-title mbr-fonts-style display-5">
												Natural Facial Oils
											</h4>
											<p className="item-text mbr-fonts-style display-7">
												Oils like rosehip oil, argan oil, jojoba oil, and coconut
												oil are renowned for their hydrating and nourishing
												properties.
											</p>
											<div className="mbr-section-btn">
												<a
													href=""
													className="btn item-btn btn-success-outline display-4"
												>
													<span className="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" />
													View More
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="item features-image">
									<div className="item-wrapper">
										<div className="item-img">
											<img
												src="assets/images/image11.jpg"
												alt="Mobirise Website Builder"
											/>
										</div>
										<div className="item-content card">
											<h4 className="item-title mbr-fonts-style display-5">
												Natural Mineral Sunscreen
											</h4>
											<p className="item-text mbr-fonts-style display-7">
												With an increasing focus on sun protection, natural mineral
												sunscreens have gained immense popularity.
											</p>
											<div className="mbr-section-btn">
												<a
													href=""
													className="btn item-btn btn-success-outline display-4"
												>
													<span className="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" />
													View More
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				data-bs-version="5.1"
				className="tabs01 carem5 cid-u4oecNIot4"
				id="tabs01-c"
			>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-10">
							<div className="content-wrapper">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item first mbr-fonts-style">
										<a
											className="nav-link show active display-7"
											role="tab"
											data-toggle="tab"
											data-bs-toggle="tab"
											href="#tabs01-c_tab0"
											aria-selected="true"
										>
											Natural Oils
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link mbr-fonts-style display-7"
											role="tab"
											data-toggle="tab"
											data-bs-toggle="tab"
											href="#tabs01-c_tab1"
											aria-selected="true"
										>
											Herbal Extracts
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link mbr-fonts-style display-7"
											role="tab"
											data-toggle="tab"
											data-bs-toggle="tab"
											href="#tabs01-c_tab2"
											aria-selected="true"
										>
											Mineral Makeup
										</a>
									</li>
								</ul>
								<div className="tab-content">
									<div
										id="tabs01-c_tab0"
										className="tab-pane in active show"
										role="tabpanel"
									>
										<div className="content-wrap">
											<div className="title-wrapper">
												<p className="mbr-desc mbr-fonts-style display-4">
													<strong>NATURAL COSMETICS</strong>
												</p>
												<h4 className="mbr-section-title mbr-fonts-style display-5">
													Natural cosmetic oils have gained significant popularity
												</h4>
											</div>
											<p className="mbr-text mbr-fonts-style display-4">
												Many natural oils, such as coconut oil, argan oil, jojoba
												oil, and rosehip oil, are used in cosmetics. These oils can
												be found in facial serums, moisturizers, and hair care
												products due to their nourishing and moisturizing
												properties.
												<br />
												<br />
												Natural cosmetic oils have gained significant popularity for
												their versatility and beneficial properties in skincare and
												beauty routines. Derived from various plant sources, these
												oils offer a plethora of nourishing and therapeutic effects
												that contribute to healthier skin and hair.
											</p>
										</div>
									</div>
									<div id="tabs01-c_tab1" className="tab-pane" role="tabpanel">
										<div className="content-wrap">
											<div className="title-wrapper">
												<p className="mbr-desc mbr-fonts-style display-4">
													<strong>NATURAL COSMETICS</strong>
												</p>
												<h4 className="mbr-section-title mbr-fonts-style display-5">
													Extracts herbs like commonly used in natural cosmetics
												</h4>
											</div>
											<p className="mbr-text mbr-fonts-style display-4">
												Extracts from herbs like chamomile, calendula, aloe vera,
												and lavender are commonly used in natural cosmetics. They
												can be found in creams, toners, and masks for their soothing
												and calming effects on the skin.
												<br />
												<br />
												Herbal extracts have become prized ingredients in the
												formulation of cosmetics, offering a natural and holistic
												approach to skincare and beauty. Extracted from various
												plants, flowers, and herbs, these botanical wonders bring a
												wealth of therapeutic and nourishing properties to cosmetic
												products.
											</p>
										</div>
									</div>
									<div id="tabs01-c_tab2" className="tab-pane" role="tabpanel">
										<div className="content-wrap">
											<div className="title-wrapper">
												<p className="mbr-desc mbr-fonts-style display-4">
													<strong>NATURAL COSMETICS</strong>
												</p>
												<h4 className="mbr-section-title mbr-fonts-style display-5">
													Mineral cosmetics provide a more natural look
												</h4>
											</div>
											<p className="mbr-text mbr-fonts-style display-4">
												Mineral-based cosmetics, including foundations, blushes, and
												eyeshadows, use naturally occurring minerals like mica, zinc
												oxide, and iron oxide. These products provide a more natural
												look and are often free from synthetic dyes and fragrances.
												<br />
												<br />
												Mineral cosmetics have gained immense popularity in the
												beauty industry for their natural ingredients and
												skin-friendly formulations. These products utilize naturally
												occurring minerals to enhance the complexion, providing a
												lightweight and breathable alternative to traditional
												makeup.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="decor-wrap_1" />
				<div className="decor-wrap_2" />
			</section>
			<section
				data-bs-version="5.1"
				className="features03 carem5 cid-u4oe5GrOHo"
				id="features03-3"
			>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-5 item features-without-image">
							<div className="item-wrapper">
								<div className="card-box card">
									<div className="icon-wrapper">
										<div className="icon-wrap">
											<div className="circle-wrap" />
											<span className="mbr-iconfont mobi-mbri-cart-add mobi-mbri" />
										</div>
									</div>
									<h4 className="item-title mbr-fonts-style display-4">
										<strong>BOUTIQUES</strong>
									</h4>
									<p className="item-text mbr-fonts-style display-7">
										Visit specialty stores and boutiques that focus on natural and
										organic products.
									</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-5 item features-without-image">
							<div className="item-wrapper">
								<div className="card-box card">
									<div className="icon-wrapper">
										<div className="icon-wrap">
											<div className="circle-wrap" />
											<span className="mbr-iconfont mobi-mbri-responsive-2 mobi-mbri" />
										</div>
									</div>
									<h4 className="item-title mbr-fonts-style display-4">
										<strong>ONLINE RETAILERS</strong>
									</h4>
									<p className="item-text mbr-fonts-style display-7">
										Explore online platforms that specialize in natural and organic
										beauty products.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				data-bs-version="5.1"
				className="article05 carem5 cid-u4oe9dyQ7a"
				id="article05-7"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="content-wrapper">
								<div className="content-wrap card">
									<h2 className="mbr-section-title mbr-fonts-style display-5">
										Organic Argan Oil
									</h2>
									<p className="mbr-text mbr-fonts-style display-4">
										One of the most popular products in the realm of natural
										cosmetics is undoubtedly the "Organic Argan Oil." Renowned for
										its versatile benefits and nourishing properties, this golden
										elixir has earned a devoted following among beauty enthusiasts
										worldwide.
									</p>
									<div className="mbr-section-btn">
										<a href="" className="btn btn-success-outline display-4">
											<span className="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" />
											View More
										</a>
									</div>
								</div>
								<div className="image-wrapper">
									<img
										src="assets/images/image9.jpg"
										alt="Mobirise Website Builder"
									/>
									<ul className="list mbr-fonts-style display-4">
										<li className="item-wrap">
											<strong>Rich composition</strong>
										</li>
										<li className="item-wrap">
											<strong>Deeply moisturize</strong>
										</li>
										<li className="item-wrap">
											<strong>Supple and radiant</strong>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				data-bs-version="5.1"
				className="article02 carem5 cid-u4oe7WBbd1"
				id="article02-5"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="title-wrapper">
								<h2 className="mbr-section-title mbr-fonts-style display-2">
									<strong>Diverse Array of Products</strong>
								</h2>
							</div>
						</div>
						<div className="col-12 col-lg-4" />
						<div className="col-12 col-lg-6">
							<div className="text-wrapper">
								<p className="mbr-text mbr-fonts-style display-4">
									Natural cosmetics have gained popularity as an appealing and
									conscientious choice for those seeking a beauty routine in harmony
									with nature. These products are crafted with an emphasis on
									plant-based, organic, and sustainably sourced ingredients,
									omitting synthetic chemicals and additives commonly found in
									traditional cosmetics.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="decor-wrap_1" />
				<div className="decor-wrap_2" />
			</section>
			<section
				data-bs-version="5.1"
				className="features04 carem5 cid-u4oe60AJSw"
				id="features04-4"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="items-wrapper">
								<div className="item features-image">
									<div className="item-wrapper">
										<div className="item-img">
											<img
												src="assets/images/image3.jpg"
												alt="Mobirise Website Builder"
											/>
										</div>
										<div className="item-content">
											<h4 className="item-title mbr-fonts-style display-5">
												Sustainable Beauty Festival
											</h4>
											<p className="item-date mbr-fonts-style display-4">
												APR 04, 2030
											</p>
											<p className="item-text mbr-fonts-style display-4">
												This event celebrates the growing trend of natural and
												sustainable beauty products. It brings together
												eco-conscious consumers, brands, and experts in a fun-filled
												festival atmosphere.
											</p>
										</div>
									</div>
									<div className="mbr-section-btn">
										<a
											href=""
											className="btn item-btn btn-secondary-outline display-4"
										>
											<span className="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" />
											View More
										</a>
									</div>
								</div>
								<div className="item features-image">
									<div className="item-wrapper">
										<div className="item-img">
											<img
												src="assets/images/image11.jpg"
												alt="Mobirise Website Builder"
											/>
										</div>
										<div className="item-content">
											<h4 className="item-title mbr-fonts-style display-5">
												Green Beauty Expo
											</h4>
											<p className="item-date mbr-fonts-style display-4">
												APR 09, 2030
											</p>
											<p className="item-text mbr-fonts-style display-4">
												This annual expo focuses on promoting natural and organic
												cosmetics to beauty professionals, retailers, and consumers.
											</p>
										</div>
									</div>
									<div className="mbr-section-btn">
										<a
											href=""
											className="btn item-btn btn-secondary-outline display-4"
										>
											<span className="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" />
											View More
										</a>
									</div>
								</div>
								<div className="item features-image">
									<div className="item-wrapper">
										<div className="item-img">
											<img
												src="assets/images/image12.jpg"
												alt="Mobirise Website Builder"
											/>
										</div>
										<div className="item-content">
											<h4 className="item-title mbr-fonts-style display-5">
												Natural Cosmetics Conference
											</h4>
											<p className="item-date mbr-fonts-style display-4">
												APR 14, 2030
											</p>
											<p className="item-text mbr-fonts-style display-4">
												This conference aims to educate and inspire professionals in
												the natural cosmetics industry. It brings together
												scientists, researchers, formulators, and brand owners.
											</p>
										</div>
									</div>
									<div className="mbr-section-btn">
										<a
											href=""
											className="btn item-btn btn-secondary-outline display-4"
										>
											<span className="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" />
											View More
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				data-bs-version="5.1"
				className="video01 carem5 cid-u4oe9R0B4o"
				id="video01-8"
			>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-10">
							<div className="title-wrapper">
								<h2 className="mbr-section-title mbr-fonts-style display-2">
									<strong>Cosmetics Production</strong>
								</h2>
							</div>
						</div>
						<div className="col-12">
							<div className="box">
								<div
									className="mbr-media show-modal align-center"
									data-modal=".modalWindow"
								>
									<img src="assets/images/background2.jpg" alt="Mobirise" />
									<div className="icon-wrap">
										<span className="mbr-iconfont mobi-mbri-play mobi-mbri" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="decor-wrap_1" />
				<div className="decor-wrap_2" />
				<div>
					<div className="modalWindow" style={{ display: "none" }}>
						<div className="modalWindow-container">
							<div className="modalWindow-video-container">
								<div className="modalWindow-video">
									<iframe
										width="100%"
										height="100%"
										frameBorder={0}
										src="https://youtube.com/embed/-BSQlJxCDcI?rel=0&enablejsapi=1"
									/>
								</div>
								<a
									className="close"
									role="button"
									data-dismiss="modal"
									data-bs-dismiss="modal"
								>
									<span
										aria-hidden="true"
										className="mbr-iconfont mobi-mbri-close mobi-mbri closeModal"
									/>
									<span className="sr-only visually-hidden visually-hidden">
										Close
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				data-bs-version="5.1"
				className="list02 carem5 cid-u4oec9hAB3"
				id="list02-b"
			>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-10">
							<div className="content-wrapper">
								<h2 className="mbr-section-title mbr-fonts-style display-5">
									Benefits of Natural Cosmetics
								</h2>
								<p className="mbr-text mbr-fonts-style display-4">
									While natural cosmetics offer numerous benefits, individual
									preferences and skin sensitivities vary, so it's essential to
									check ingredient lists and choose products that align with
									personal preferences and skin needs.
								</p>
							</div>
						</div>
						<div className="col-12 col-lg-8">
							<ul className="list mbr-fonts-style display-4">
								<li className="item-wrap">
									<strong> Gentle on the Skin:</strong>
									Natural cosmetics are often formulated with plant-based
									ingredients, avoiding harsh chemicals and synthetic additives.
								</li>
								<li className="item-wrap">
									<strong>No Harmful Chemicals:</strong>
									Many conventional cosmetics contain potentially harmful chemicals
									like parabens, sulfates, and phthalates.
								</li>
								<li className="item-wrap">
									<strong>Environmentally Friendly:</strong>
									Natural cosmetics are often produced using sustainable practices.
									These products tend to have biodegradable formulations and
									environmentally conscious packaging.
								</li>
								<li className="item-wrap">
									<strong>Cruelty-Free:</strong>
									Natural cosmetic brands often emphasize cruelty-free practices,
									meaning their products are not tested on animals.
								</li>
								<li className="item-wrap">
									<strong>Rich in Nutrients:</strong>
									Natural cosmetics often contain ingredients rich in vitamins,
									antioxidants, and essential oils.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section
				data-bs-version="5.1"
				className="article04 carem5 cid-u4oe8NfrbD"
				id="article04-6"
			>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-8">
							<div className="content-wrapper">
								<p className="mbr-desc mbr-fonts-style display-4">
									News on our <strong>social networks</strong>
								</p>
								<div className="social-wrapper">
									<div className="soc-item">
										<a href="https://mobiri.se/">
											<span className="mbr-iconfont socicon socicon-facebook" />
										</a>
									</div>
									<div className="soc-item">
										<a href="https://mobiri.se/">
											<span className="mbr-iconfont socicon socicon-linkedin" />
										</a>
									</div>
									<div className="soc-item">
										<a href="https://mobiri.se/">
											<span className="mbr-iconfont socicon socicon-instagram" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				data-bs-version="5.1"
				className="form01 carem5 cid-u4oeaGnnKJ"
				id="form01-9"
			>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-8">
							<div className="title-wrapper">
								<p className="mbr-desc mbr-fonts-style display-4">
									<strong>DO YOU HAVE ANY QUESTIONS ABOUT OUR PRODUCTS?</strong>
								</p>
								<h2 className="mbr-section-title mbr-fonts-style display-5">
									Our team will quickly answer any questions!
								</h2>
							</div>
							<div className="form-wrapper">
								<div className="mbr-form" data-form-type="formoid">
									<form
										action="https://mobirise.eu/"
										method="POST"
										className="mbr-form form-with-styler"
										data-form-title="Form Name"
									>
										<input
											type="hidden"
											name="email"
											data-form-email="true"
											defaultValue="kGRxXVK6LYS+HEh/CdXSK1hmJ2mEL93K4SnPvdCDOOJKBrBi6XcGhq2q5P3/OlkboN/rD+N/b/Gx1d7WGjuIkXB+US4EAWGaOg5AxsUHd0RgjW6G3j9lRG79iBYA6n5T.ER9/Lc7a770lhnxpnP7JFoICuGrydB1HbuLSFuELv4x7MzrzS2NvqM+AYYCw18wgbfFyhKDBt8onnF9sUdCm4NKvKpccC/srToGP5mjh6dY4xefcFS87H8uMtrNGDLny"
										/>
										<div className="row">
											<div
												data-form-alert=""
												className="alert alert-success col-12"
											>
												Thanks for filling out the form!
											</div>
											<div
												data-form-alert-danger=""
												className="alert alert-danger col-12"
											>
												Oops...! some problem!
											</div>
										</div>
										<div className="dragArea row">
											<div
												className="col-lg-6 col-md-12 col-sm-12 form-group mb-3 mb-3"
												data-for="name"
											>
												<input
													type="text"
													name="name"
													placeholder="Full Name*"
													data-form-field="name"
													className="form-control display-7"
													defaultValue=""
													id="name-form01-9"
												/>
											</div>
											<div
												className="col-lg-6 col-md-12 col-sm-12 form-group mb-3 mb-3"
												data-for="email"
											>
												<input
													type="email"
													name="email"
													placeholder="Email*"
													data-form-field="email"
													className="form-control display-4"
													defaultValue=""
													id="email-form01-9"
												/>
											</div>
											<div
												data-for="text"
												className="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3"
											>
												<input
													type="text"
													name="text"
													placeholder="Company Name*"
													data-form-field="text"
													className="form-control display-4"
													defaultValue=""
													id="text-form01-9"
												/>
											</div>
											<div
												data-for="number"
												className="col-lg-6 col-md-12 col-sm-12 form-group mb-3"
											>
												<input
													type="number"
													name="number"
													placeholder="Phone Number*"
													max={100}
													min={0}
													step={1}
													data-form-field="number"
													className="form-control display-7"
													defaultValue=""
													id="number-form01-9"
												/>
											</div>
											<div
												className="col-lg-6 col-md-12 col-sm-12 form-group mb-3"
												data-for="text1"
											>
												<input
													type="text"
													name="text1"
													placeholder="Department*"
													data-form-field="text1"
													className="form-control display-7"
													defaultValue=""
													id="text1-form01-9"
												/>
											</div>
											<div
												className="col-lg-12 col-md-12 col-sm-12 form-group mb-3 mb-3"
												data-for="textarea"
											>
												<textarea
													name="textarea"
													placeholder="Your message"
													data-form-field="textarea"
													className="form-control display-4"
													id="textarea-form01-9"
													defaultValue={""}
												/>
											</div>
											<div className="col mbr-section-btn">
												<button
													type="submit"
													className="btn btn-secondary display-4"
												>
													{" "}
													Send Message{" "}
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="decor-wrap_1" />
				<div className="decor-wrap_2" />
				<div className="decor-wrap_3" />
			</section>
			<section
				data-bs-version="5.1"
				className="slider02 mbr-embla carem5 cid-u4oedGAwJT"
				id="slider02-d"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="embla"
								data-skip-snaps="true"
								data-align="center"
								data-contain-scroll="trimSnaps"
								data-loop="true"
								data-auto-play-interval={5}
								data-draggable="true"
							>
								<div className="embla__viewport is-draggable">
									<div
										className="embla__container"
										style={{ transform: "translate3d(0%, 0px, 0px)" }}
									>
										<div
											className="embla__slide slider-image item is-selected"
											style={{
												marginLeft: "0rem",
												marginRight: "0rem",
												left: "0%"
											}}
										>
											<div className="slide-content">
												<div className="item-wrapper">
													<div className="item-img">
														<img
															src="assets/images/image8.jpg"
															alt="Mobirise Website Builder"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											className="embla__slide slider-image item"
											style={{ marginLeft: "0rem", marginRight: "0rem" }}
										>
											<div className="slide-content">
												<div className="item-wrapper">
													<div className="item-img">
														<img
															src="assets/images/image14.jpg"
															alt="Mobirise Website Builder"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											className="embla__slide slider-image item"
											style={{ marginLeft: "0rem", marginRight: "0rem" }}
										>
											<div className="slide-content">
												<div className="item-wrapper">
													<div className="item-img">
														<img
															src="assets/images/image13.jpg"
															alt="Mobirise Website Builder"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											className="embla__slide slider-image item"
											style={{ marginLeft: "0rem", marginRight: "0rem" }}
										>
											<div className="slide-content">
												<div className="item-wrapper">
													<div className="item-img">
														<img
															src="assets/images/image12.jpg"
															alt="Mobirise Website Builder"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											className="embla__slide slider-image item"
											style={{ marginLeft: "0rem", marginRight: "0rem" }}
										>
											<div className="slide-content">
												<div className="item-wrapper">
													<div className="item-img">
														<img
															src="assets/images/image11.jpg"
															alt="Mobirise Website Builder"
														/>
													</div>
												</div>
											</div>
										</div>
										<div
											className="embla__slide slider-image item"
											style={{ marginLeft: "0rem", marginRight: "0rem" }}
										>
											<div className="slide-content">
												<div className="item-wrapper">
													<div className="item-img">
														<img
															src="assets/images/image3.jpg"
															alt="Mobirise Website Builder"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<button className="embla__button embla__button--prev">
									<span
										className="mobi-mbri mobi-mbri-left mbr-iconfont"
										aria-hidden="true"
									/>
									<span className="sr-only visually-hidden visually-hidden visually-hidden">
										Previous
									</span>
								</button>
								<button className="embla__button embla__button--next">
									<span
										className="mobi-mbri mobi-mbri-right mbr-iconfont"
										aria-hidden="true"
									/>
									<span className="sr-only visually-hidden visually-hidden visually-hidden">
										Next
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				data-bs-version="5.1"
				className="footer01 carem5 cid-u4oebfMIN9"
				id="footer01-a"
			>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-5 card">
							<div className="title-wrapper">
								<div className="title-wrap">
									<img src="assets/images/logo.png" alt="Mobirise" />
									<h2 className="mbr-section-title mbr-fonts-style display-5">
										<strong>NC</strong>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-12">
							<p className="mbr-copy mbr-fonts-style display-4">
								© Copyright 2030 Mobirise - All Rights Reserved
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;