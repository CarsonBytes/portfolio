<!DOCTYPE html>
<html lang="en">

<head>
    <title>Carson Ng</title>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Carson Ng">
    <meta name="author" content="Carson Ng">
    <link rel="shortcut icon" href="favicon2.ico">

    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,300italic,400italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

    <!-- FontAwesome JS -->
    <script defer src="assets/fontawesome/js/all.js"></script>

    <!-- Global CSS -->
    <!-- <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <?php /*
    <!-- github calendar css -->
    <!-- <link rel="stylesheet" href="assets/plugins/github-calendar/dist/github-calendar-responsive.css"> -->
    <!-- <link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css" /> -->
    <!-- github activity css -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css">
    <link rel="stylesheet" href="assets/plugins/github-activity/src/github-activity.css"> -->

    <!-- lightgallery css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.5.0/css/lightgallery-bundle.min.css">

*/ ?>
    <!-- elastic grid -->
    <!-- <link rel="stylesheet" type="text/css" href="jquery-elastic-grid-master/css/demo.css" /> -->
    <link rel="stylesheet" type="text/css" href="jquery-elastic-grid-master/css/elastic_grid.min.css" />

    <!-- Theme CSS -->
    <link id="theme-style" rel="stylesheet" href="assets/css/styles.css">

    <link id="theme-style" rel="stylesheet" href="assets/css/custom.css">
</head>

<body data-theme="dark">
    <!-- ******HEADER****** -->
    <header class="header">
        <div class="container">
            <div class="row align-items-center" style="padding: 0 30px;">
                <div class="col">
                    <img class="profile-image img-fluid float-start rounded-circle" src="assets/images/happy.png" alt="profile image" />
                    <div class="profile-content">
                        <h1 class="name">Carson Ng
                            <a href="https://github.com/carsonng" data-bs-toggle="tooltip" title="My GitHub" target="_blank" class="fadein"><i class="fab fa-github"></i></a>
                        </h1>
                        <h2 class="desc">Co-Founder & Lead Developer @ <b>HKIT.Supply</b>
                        </h2>
                        <?php /* <ul class="social list-inline">
                            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
		                    <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
		                    <li class="list-inline-item"><a href="#"><i class="fab fa-github-alt"></i></a></li>    
		                    <li class="list-inline-item"><a href="#"><i class="fab fa-stack-overflow"></i></a></li>   
		                    <li class="list-inline-item last-item"><a href="#"><i class="fab fa-codepen"></i></a></li>      
                        </ul> */ ?>
                        <div class="icons">
                            <a target="_blank" class="fadein" href="https://stackoverflow.com/users/242058/capitaine"><img src="https://stackoverflow.com/users/flair/242058.png?theme=dark" width="208" height="58" alt="My Stack Overflow Profile" data-bs-toggle="tooltip" title="My Stack Overflow Profile"></a>
                            <a target="_blank" class="fadein" href="https://github.com/carsonng"><img class="github_logo" src="/assets/images/GitHub_Logo_White.png" height="58" alt="My Github Profile" data-bs-toggle="tooltip" title="My Github Profile"></a>
                            <a target="_blank" class="fadein" href="https://www.zend-zce.com/en/yellow-pages/ZEND020400"><img data-src="https://www.zend.com/sites/zend/files/image/2019-09/zf-zce-logo.gif" height="58" alt="Zend Certified Engineer" data-bs-toggle="tooltip" title="Zend Certified Engineer" loading="lazy" typeof="foaf:Image" class="lozad lazyload" src="https://www.zend.com/sites/zend/files/image/2019-09/zf-zce-logo.gif" data-loaded="true" data-fully-loaded="true"></a>
                            <img data-src="assets/images/tvp-logo-en.webp" height="58" alt="Supplier For Technology Voucher Programme" data-bs-toggle="tooltip" title="Supplier For Technology Voucher Programme" loading="lazy" typeof="foaf:Image" class="lozad lazyload" src="assets/images/tvp-logo-en.webp" data-loaded="true" data-fully-loaded="true">
                            <img data-src="assets/images/shopify-partner.jpg" height="58" alt="Shopify Partner" data-bs-toggle="tooltip" title="Shopify Partner" loading="lazy" typeof="foaf:Image" class="lozad lazyload" src="assets/images/shopify-partner.jpg" data-loaded="true" data-fully-loaded="true">
                            <!-- <img data-src="assets/images/ccmf.PNG" height="58" alt="Incubatee For Cyberport Incubation Programme" data-bs-toggle="tooltip" title="Incubatee For Cyberport Incubation Programme" loading="lazy" typeof="foaf:Image" class="lozad lazyload" src="assets/images/ccmf.PNG" data-loaded="true" data-fully-loaded="true"> -->
                        </div>
                    </div>
                    <!--//profile-->
                </div>
                <!--//col-->
                <div class="col-12 col-md-auto">
                    <div class="dark-mode-switch d-flex">
                        <div class="form-check form-switch mx-auto mx-md-0">
                            <input type="checkbox" class="form-check-input me-2" id="darkSwitch" />
                            <label class="custom-control-label" for="darkSwitch">Dark Mode</label>
                        </div>
                    </div><!--//dark-mode-switch-->
                    <a class="btn btn-cta-primary" href="https://wa.me/+85259173926?text=Hi%20Carson,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20make%20an%20inquiry." target="_blank"><i class="fa-brands fa-whatsapp"></i><!-- <i class="fas fa-paper-plane"></i> --> Contact
                        Me</a>
                </div>
                <!--//col-->
            </div>
            <!--//row-->
        </div>
        <!--//container-->
    </header>
    <!--//header-->

    <div class="container sections-wrapper py-5">
        <div class="row">
            <div class="primary col-lg-7 col-xl-8 col-xxl-9 col-12">
                <section class="about section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading">About Me</h2>
                        <div class="content">
                            <p>With over 15 years of experience in the web application industry, I specialize in web & app development, ERP, E-commerce, and <a class="more-link" data-bs-toggle="collapse" aria-expanded="true" onclick="$(this).hide();$('.more-link-sub').show();" data-bs-target="#collapseExample" href="#">more...</a><span class="more-link-sub" style="display: none">more...</span></p>
                            <div class="collapse" id="collapseExample">
                                <p>Currently based in Hong Kong, I offer professional services such as team management, project consultation, and enterprise application development to multiple tech companies.</p>
                                <p>During my time in Germany and Japan from 2009 to 2019, I excelled in collaborative team environments, emphasizing coding standards, code review, and collaborative documentation.</p>
                                <p>In response to the challenges of the COVID-19 pandemic, I transitioned to self-employment, delivering exceptional results while fostering positive relationships with clients and prospective employers. This experience has honed my adaptability and ability to thrive in dynamic environments.</p>
                            </div>
                        </div>
                        <!--//content-->
                    </div>
                    <!--//section-inner-->
                </section>
                <!--//section-->

                <section class="projects section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading">Some Past & Ongoing Projects</h2>
                        <div class="content">
                            <div id="elastic_grid_demo"></div>
                        </div>
                    </div>
                </section>
                <?php /*
                <section class="latest section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading">Latest Projects</h2>
                        <div class="content">

                            <div class="item featured text-center">

                                <div class="featured-image has-ribbon">
                                    <!-- <a href="#" target="_blank"> -->
                                    <img class="img-fluid project-image rounded shadow-sm" src="assets/images/projects/hot_project.jpg" alt="project name" />
                                    <!-- </a> -->
                                    <div class="ribbon">
                                        <div class="text">Hot</div>
                                    </div>
                                </div>

                                <h3 class="title mb-3" style="color:white;"><!-- <a href="#" target="_blank"> -->smartBits ERP - The Ultimate Solution for Enterprise Resource Planning<!-- </a> -->
                                </h3>

                                <div class="desc text-start">
                                    <p>smartBits ERP is the most competent utility tool to help you manage various aspects such as accounting, HRM, CRM, and POS in one platform with utmost ease. We also provide further customization to tailor-make it for specific business needs.</p>
                                </div>
                                <!--//desc-->
                                <a class="btn btn-cta-secondary" target="_blank" href="https://wa.me/+85259173926?text=Hi%20Carson,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20ask%20for%20a%20demo%20on%20smartBits%20ERP."><i class="fa-brands fa-whatsapp"></i> Ask for a Demo</a>
                            </div>
                            <!--//item-->
                            <hr class="divider" />
                            <div class="item row">
                                <a class="col-md-4 col-12 moodle_screenshots" href="#" target="_blank">
                                    <img class="img-fluid project-image rounded shadow-sm" src="assets/images/projects/moodle/landing_blurred_thumb.jpg" alt="e-learning" />
                                </a>
                                <div class="desc col-md-8 col-12">
                                    <h3 class="title"><a href="#" target="_blank" class="moodle_screenshots">smartBits Learning - E-Learning Learning Management System</a></h3>
                                    <p class="mb-2">SmartBits Learning is a fully customizable learning management system for teachers and students, which has been adopted by the HKSAR government. We offer plugin and theme customization to meet specific requirements.</p>
                                    <p><a class="more-link moodle_screenshots" href="#" target="_blank"><i class="fas fa-external-link-alt"></i>More Screenshots</a>
                                    </p>
                                </div>
                                <!--//desc-->
                            </div>
                            <!--//item-->

                            <div class="item row">
                                <a class="col-md-4 col-12 e-commerce_screenshots" href="#" target="_blank">
                                    <img class="img-fluid project-image rounded shadow-sm" src="assets/images/projects/e-commerce/ahkns_home_blurred.jpg" alt="E-commerce site" />
                                </a>
                                <div class="desc col-md-8 col-12">
                                    <h3 class="title"><a href="#" class="e-commerce_screenshots" target="_blank">E-Commerce Sites for Online Business</a></h3>
                                    <p class="mb-2">Our team specializes in building and customizing E-commerce platforms tailored to the unique needs of businesses. We support the integration of leading shipping methods and payment methods to ensure smooth operations.</p>
                                    <p><a class="more-link e-commerce_screenshots" href="#" target="_blank"><i class="fas fa-external-link-alt"></i>More Screenshots</a>
                                    </p>
                                </div>
                                <!--//desc-->
                            </div>
                            <!--//item-->

                            <div class="item row">
                                <a class="col-md-4 col-12 pmp_screenshots" href="#" target="_blank">
                                    <img class="img-fluid project-image rounded shadow-sm" src="assets/images/projects/pmp/main_manager_blurred.png" alt="Property Management Platform" />
                                </a>
                                <div class="desc col-md-8 col-12">
                                    <h3 class="title"><a href="#" class="pmp_screenshots" target="_blank">Internal Property Management Platform</a></h3>
                                    <p class="mb-2">Our internal property management platform has been adopted by a current property management enterprise. It provides HRM and task management functionalities for housing estates. We offer customization options for potential customers to meet their specific needs.</p>
                                    <p><a class="more-link pmp_screenshots" href="#" target="_blank"><i class="fas fa-external-link-alt"></i>More Screenshots</a>
                                    </p>
                                </div>
                                <!--//desc-->
                            </div>
                            <!--//item-->

                            <a class="btn btn-cta-secondary float-end" target="_blank" href="https://wa.me/+85259173926?text=Hi%20Carson,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20ask%20for%20a%20demo."><i class="fa-brands fa-whatsapp"></i> Ask for a Demo</a>
                            <div class="clearfix"></div>

                        </div>
                        <!--//content-->
                    </div>
                    <!--//section-inner-->
                </section>
                <!--//section-->

                <section class="projects section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading">Other Projects</h2>
                        <div class="content">
                            <div class="item">
                                <h3 class="title"><a href="#" class="cms_screenshots" target="_blank">UI and CMS Development</a>
                                </h3>
                                <p class="summary">I am experienced in working with major CMS and e-commerce platforms, such as Joomla!, WordPress, and Magento. My services include plugin and theme customization for these platforms.</p>
                                <p>In addition to open-source CMS platforms, my team and I also specialize in providing dedicated CMS solutions that are tailored to meet specific business needs.</p>
                                <p>Here are some examples of the work we have done:
                                <ul>
                                    <li>We have built a UI layout that closely resembles the Amazon shopping site.</li>
                                    <li>We have successfully implemented bulk product import functionality through CSV files.</li>
                                    <li>We have developed a magnifier lens feature for product thumbnails on the product view page.</li>
                                    <li>We have organized and optimized data display on tables for improved user experience.</li>
                                    <li>We have created an ebook preview simulation to enhance user engagement.</li>
                                </ul>
                                </p>
                                <p>With my expertise in UI and CMS development, I am dedicated to helping you create visually appealing and user-friendly websites or applications that are customized to meet your specific requirements.</p>
                                <p><a class="more-link cms_screenshots" href="#" target="_blank"><i class="fas fa-external-link-alt"></i>More Screenshots</a></p>
                                <p><a class="more-link" href="https://github.com/carsonng/sensai" target="_blank"><i class="fas fa-external-link-alt"></i>View Example Code in Github</a></p>
                            </div>
                            <!--//item-->
                            <div class="item">
                                <h3 class="title"><a href="https://github.com/carsonng/python_scraping" target="_blank">Python + Selenium - Web Scraping Automation Tool <i class="fas fa-external-link-alt"></i></a></h3>
                                <p class="summary">I have developed a web scraping automation tool using Python and headless Selenium ChromeDriver. This tool allows for efficient scraping of website content.</p>
                                <p>During the development process, I encountered various challenges, including handling ajax pagination, image loading, random waiting time, and dealing with redirection to Cloudflare pages. Through patient observation and careful refinement of specific functions, I was able to effectively overcome these challenges.</p>
                                <p>However, it is important to note that there are certain cases where scraping may not be feasible. For example, when a captcha is required, or when there are limitations on the number of pages or images that can be accessed with a registered user account.</p>
                                <p>
                                    The scraped website content is stored in both JSON and image formats. You can refer to the "json" folder for examples of the stored data.
                                </p>
                                <p>
                                    With this Python + Selenium web scraping automation tool, I aim to provide a reliable solution for extracting website content efficiently and effectively.
                                </p>
                                <p><a class="more-link" href="https://github.com/carsonng/python_scraping" target="_blank"><i class="fas fa-external-link-alt"></i>View Example Code in Github</a></p>
                            </div>
                            <!--//item-->
                            <div class="item">
                                <h3 class="title"><a href="https://github.com/carsonng/booking_stripe_charge" target="_blank">Internal Visa/MasterCard charging system <i class="fas fa-external-link-alt"></i></a>
                                </h3>
                                <p class="summary">I have developed an internal charging system that allows for direct credit/debit card charging via the Stripe API. This system is built on top of the existing Stripe PHP library, which was forked from https://github.com/stripe/stripe-php.</p>

                                <p>The main features of this system include:
                                <ul>
                                    <li>User Interface (UI): I have built a user-friendly UI that enables merchants to easily create customers within the system.
                                    </li>
                                    <li>Credit Card Charging: Merchants can charge customers by inputting their credit card details directly into the system. This allows for seamless and secure transactions.
                                    </li>
                                    <li>Account Switching: The system allows for easy switching between different Stripe live or test accounts. This flexibility ensures that merchants can manage their transactions effectively.
                                    </li>
                                    <li>Charge History Logging: I have implemented a logging feature that records the charge history. This allows merchants to keep track of all transactions made through the system.
                                    </li>
                                </ul>
                                </p>
                                <p>With this internal Visa/MasterCard charging system, merchants can streamline their payment processes and provide a seamless experience for their customers.
                                </p>
                                <p><a class="more-link" href="https://github.com/carsonng/booking_stripe_charge" target="_blank"><i class="fas fa-external-link-alt"></i>View Example Code in Github</a></p>
                            </div>
                            <!--//item-->

                            <a class="btn btn-cta-secondary float-end" target="_blank" href="https://wa.me/+85259173926?text=Hi%20Carson,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20ask%20for%20a%20demo."><i class="fa-brands fa-whatsapp"></i> Ask for a Demo</a>
                            <div class="clearfix"></div>
                            <!-- <a class="btn btn-cta-secondary" href="#">More on GitHub <i
                                    class="fas fa-chevron-right pt-1"></i></a> -->

                        </div>
                        <!--//content-->
                    </div>
                    <!--//section-inner-->
                </section>
                <!--//section-->

                <section class="github section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading">My GitHub</h2>
                        <!-- <p>You can embed your GitHub contribution graph calendar using IonicaBizau's <a
                                href="https://github.com/IonicaBizau/github-calendar" target="_blank">GitHub
                                Calendar</a> widget. -->
                        <a href="https://github.com/carsonng" target="_blank">https://github.com/carsonng</a>


                        <!-- Prepare a container for your calendar. -->
                        <!-- <div class="calendar">
                            Loading the data just for you.
                        </div> -->
                        <!--//github-graph-->

                        <!-- <p>You can also embed your GitHub activities using Casey Scarborough's <a href="https://github.com/caseyscarborough/github-activity" target="_blank">GitHub Activity Stream</a> widget.    -->
                        <!--//Usage: https://caseyscarborough.com/projects/github-activity/ -->
                        <!-- <div id="ghfeed" class="ghfeed">
                        </div> -->
                        <!--//ghfeed-->

                    </div>
                    <!--//secton-inner-->
                </section>
                <!--//section-->
                */ ?>
            </div>
            <!--//primary-->
            <div class="secondary col-lg-5 col-xl-4 col-xxl-3 col-12">
                <aside class="info aside section">
                    <div class="section-inner shadow-sm rounded">
                        <!-- <h2 class="heading sr-only">Basic Information</h2> -->
                        <div class="content">
                            <ul class="list-unstyled">
                                <li><i class="fas fa-map-marker-alt"></i><span class="sr-only">Location: </span>Hong Kong
                                </li>
                                <!-- <li><i class="fas fa-envelope"></i><span class="sr-only">Email:</span>carsonng2000 [at] gmail</li> -->
                                <li><i class="fa-brands fa-whatsapp"></i><!-- <i class="fas fa-phone"></i> --><span class="sr-only">WhatsApp: </span><a target="_blank" href="https://wa.me/+85259173926?text=Hi%20Carson,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20make%20an%20inquiry.">+852 5917 3926</a></li>
                            </ul>
                        </div>
                        <!--//content-->
                    </div>
                    <!--//section-inner-->
                </aside>
                <!--//aside-->

                <aside class="skills aside section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading">Skills</h2>
                        <div class="content">
                            <p class="intro">
                                We understand various languages, including:</p>
                            <div class="skillset">

                                <div class="item">
                                    <h3 class="level-title">PHP & Laravel<span class="level-label" data-bs-toggle="tooltip" data-placement="left" title=""><i class="fas fa-info-circle"></i>Expert</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="94"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <div class="item">
                                    <h3 class="level-title">HTML5, CSS3, SASS &amp; LESS<span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title=""><i class="fas fa-info-circle"></i>Expert</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 93%" aria-valuenow="93" aria-valuemin="0" aria-valuemax="94"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <div class="item">
                                    <h3 class="level-title">Javascript &amp; jQuery<span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title=""><i class="fas fa-info-circle"></i>Expert</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="94"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <div class="item">
                                    <h3 class="level-title">Node.js & React<span class="level-label" data-bs-toggle="tooltip" data-placement="left" title=""><i class="fas fa-info-circle"></i>Pro</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 86%" aria-valuenow="86" aria-valuemin="0" aria-valuemax="90"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <div class="item">
                                    <h3 class="level-title">Figma Prototyping<span class="level-label" data-bs-toggle="tooltip" data-placement="left" title=""><i class="fas fa-info-circle"></i>Pro</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 86%" aria-valuenow="86" aria-valuemin="0" aria-valuemax="86"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <div class="item">
                                    <h3 class="level-title">React Native<span class="level-label" data-bs-toggle="tooltip" data-placement="left" title=""><i class="fas fa-info-circle"></i>Pro</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 86%" aria-valuenow="86" aria-valuemin="0" aria-valuemax="86"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <div class="item">
                                    <h3 class="level-title">Python &amp; Selenium<span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title=""><i class="fas fa-info-circle"></i>Good</span></h3>

                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="70"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <!-- <p><a class="more-link" href="#"><i class="fas fa-external-link-alt"></i>More on
                                        GitHub</a></p> -->
                            </div>
                        </div>
                        <!--//content-->
                    </div>
                    <!--//section-inner-->
                </aside>
                <!--//section-->

                <aside class="education aside section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading">Education</h2>
                        <div class="content">
                            <div class="item">
                                <h3 class="title"><i class="fas fa-graduation-cap"></i> BSc (Hons) in
                                    Information Engineering</h3>
                                <h4 class="university">Chinese University of Hong Kong <span class="year">(2005-2008)</span>
                                </h4>
                            </div>
                            <!--//item-->
                        </div>
                        <!--//content-->
                    </div>
                    <!--//section-inner-->
                </aside>
                <!--//section-->

                <aside class="languages aside section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading">Languages</h2>
                        <div class="content">
                            <ul class="list-unstyled">
                                <li class="item">
                                    <span class="title"><strong>Cantonese:</strong></span>
                                    <span class="level">Native Speaker <br class="visible-xs" /><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> </span>
                                </li>
                                <!--//item-->
                                <li class="item">
                                    <span class="title"><strong>English:</strong></span>
                                    <span class="level">Professional Working <br class="visible-sm visible-xs" /><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half"></i></span>
                                </li>
                                <!--//item-->
                                <li class="item">
                                    <span class="title"><strong>German:</strong></span>
                                    <span class="level">Professional Working <br class="visible-sm visible-xs" /><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></span>
                                </li>
                                <!--//item-->
                                <li class="item">
                                    <span class="title"><strong>Mandarin:</strong></span>
                                    <span class="level">Limited - Professional Working <br class="visible-sm visible-xs" /><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half"></i></span>
                                </li>
                                <!--//item-->
                                <li class="item">
                                    <span class="title"><strong>Japanese:</strong></span>
                                    <span class="level">Intermediate (Passed JLPT N2) <br class="visible-sm visible-xs" /><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></span>
                                </li>
                                <!--//item-->
                            </ul>
                        </div>
                        <!--//content-->
                    </div>
                    <!--//section-inner-->
                </aside>
                <!--//section-->

            </div>
            <!--//secondary-->
        </div>
        <!--//row-->
    </div>
    <!--//masonry-->

    <!-- ******FOOTER****** -->
    <footer class="footer">
        <div class="container text-center">
            <small class="copyright">© <?php echo date("Y"); ?> Carson Ng. All Rights Reserved.</small>
        </div>
        <!--//container-->
    </footer>
    <!--//footer-->

    <!-- Javascript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript" src="assets/plugins/popper.min.js"></script>
    <script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="assets/plugins/vanilla-rss/dist/rss.global.min.js"></script>
    <script type="text/javascript" src="assets/plugins/dark-mode-switch/dark-mode-switch.js"></script>
    <?php /*<!-- github calendar plugin -->
    <!-- <script type="text/javascript" src="assets/plugins/github-calendar/dist/github-calendar.min.js"></script> -->
    <!-- <script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js">
    </script>
    <script>
        GitHubCalendar(".calendar", "carsonng");
    </script> -->
    <!-- github activity plugin -->
    <!-- <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js"></script>
    <script type="text/javascript" src="assets/plugins/github-activity/src/github-activity.js"></script> -->

    <!-- lightgallery plugins -->
    <script type="text/javascript" src="assets/plugins/lightgallery/lightgallery.umd.car.js"></script>
    <script type="text/javascript" src="assets/plugins/lightgallery/plugins/thumbnail/lg-thumbnail.min.js"></script>
*/ ?>
    <!-- elastic grid -->
    <script src="jquery-elastic-grid-master/js/modernizr.custom.js"></script>
    <script src="jquery-elastic-grid-master/js/classie.js"></script>
    <script type="text/javascript" src="jquery-elastic-grid-master/js/jquery.elastislide.js"></script>
    <script type="text/javascript" src="jquery-elastic-grid-master/js/jquery.hoverdir.js"></script>
    <script type="text/javascript" src="jquery-elastic-grid-master/js/elastic_grid.js"></script>


    <!-- custom js -->
    <script type="text/javascript" src="assets/js/main.js"></script>
</body>

</html>