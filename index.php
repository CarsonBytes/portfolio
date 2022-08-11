<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap Portfolio/Resume Theme for Developers</title>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Boootstrap Portfolio/Resume Theme for Developers">
    <meta name="author" content="Xiaoying Riley at 3rd Wave Media">
    <link rel="shortcut icon" href="favicon.ico">

    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,300italic,400italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

    <!-- FontAwesome JS -->
    <script defer src="assets/fontawesome/js/all.js"></script>

    <!-- Global CSS -->
    <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">

    <!-- github calendar css -->
    <link rel="stylesheet" href="assets/plugins/github-calendar/dist/github-calendar-responsive.css">
    <!-- github activity css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css">
    <link rel="stylesheet" href="assets/plugins/github-activity/src/github-activity.css">

    <!-- lightgallery css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.5.0/css/lightgallery-bundle.min.css">

    <!-- Theme CSS -->
    <link id="theme-style" rel="stylesheet" href="assets/css/styles.css">

</head>
<style>
    .profile-content .icons {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
    }

    @media (max-width: 767.98px) {
        .profile-content .icons {
            justify-content: center;
        }
    }

    a.btn .svg-inline--fa {
        top: 0;
    }

    body[data-theme="dark"] .text-muted {
        color: rgba(255, 255, 255, 0.5) !important;
    }

    .width-full.f6.px-0.px-md-5.py-1 {
        display: none;
    }
</style>

<body data-theme="dark">
    <!-- ******HEADER****** -->
    <header class="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <img class="profile-image img-fluid float-start rounded-circle" src="assets/images/happy.png" alt="profile image" />
                    <div class="profile-content">
                        <h1 class="name">Chi Tsun Ng (Carson)
                            <a href="https://github.com/carsonng" data-bs-toggle="tooltip" title="My GitHub"><i class="fab fa-github"></i></a>
                        </h1>
                        <h2 class="desc">Co-Founder & Lead Developer @ <b>smartBits</b>
                        </h2>
                        <!-- <ul class="social list-inline">
                            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
		                    <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
		                    <li class="list-inline-item"><a href="#"><i class="fab fa-github-alt"></i></a></li>    
		                    <li class="list-inline-item"><a href="#"><i class="fab fa-stack-overflow"></i></a></li>   
		                    <li class="list-inline-item last-item"><a href="#"><i class="fab fa-codepen"></i></a></li>      
                        </ul> -->
                        <div class="icons">
                            <a target="_blank" href="https://stackoverflow.com/users/242058/capitaine"><img src="https://stackoverflow.com/users/flair/242058.png?theme=dark" width="208" height="58" alt="profile for Capitaine at Stack Overflow, Q&amp;A for professional and enthusiast programmers" data-bs-toggle="tooltip" title="My Stack Overflow"></a>
                            <a target="_blank" href="https://www.zend-zce.com/en/yellow-pages/ZEND020400"><img data-src="https://www.zend.com/sites/zend/files/image/2019-09/zf-zce-logo.gif" height="58" alt="Zend Certified Engineer" data-bs-toggle="tooltip" title="Zend Certified Engineer" loading="lazy" typeof="foaf:Image" class="lozad lazyload" src="https://www.zend.com/sites/zend/files/image/2019-09/zf-zce-logo.gif" data-loaded="true" data-fully-loaded="true"></a>
                        </div>
                    </div>
                    <!--//profile-->
                </div>
                <!--//col-->
                <div class="col-12 col-md-auto">
                    <!-- <div class="dark-mode-switch d-flex">
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
            <div class="primary col-lg-8 col-12">
                <section class="about section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading">About Me</h2>
                        <div class="content">
                            <p>I have been in web application industry for 15+ years. Currently I work with several tech
                                companies and offer professional services such as team management, project consultation,
                                and
                                development of enterprise applications. The applications involved include
                                E-Learning, ERP, HRM, CRM, Chatbot, E-Commerce, etc.</p>
                            <p>Having worked and lived in Germany and Japan for 10+ years, I am accustomed to work
                                as a team, and place a high value on coding standards, automated testing, code review,
                                as well as collaborative documentation.</p>
                            <p>In March 2021, I formed a team with some fellows called <b>"smartBits"</b>. My team and I strive
                                to deliver the best possible solutions to our clients. After delivering final product, we continue to provide maintenance support for content and catalog updates, as well as bugfix.</p>
                        </div>
                        <!--//content-->
                    </div>
                    <!--//section-inner-->
                </section>
                <!--//section-->

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
                                    <p>smartBits ERP is the most competent utility tool to help you manage various aspects like Accounting, HRM, CRM, POS in 1 platform with the utmost ease. We provide further customization to tailor-make for specific business needs.</p>
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
                                    <p class="mb-2">Being adopted by HKSAR government, SmartBits Learning is a fully customizable learning management system for teachers and students. Plugin and Theme customization is supported.</p>
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
                                    <p class="mb-2">My team and I build and customize E-commerce platforms for specific business needs. Integration of leading shipping methods and payment methods are supported.</p>
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
                                    <p class="mb-2">Being adopted by a current property management enterprise, this internal property management platform provides HRM and task management among the housing estates. Customization could be provided for potential customers.</p>
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
                                <h3 class="title"><a href="#" class="cms_screenshots" target="_blank">UI and CMS development</a>
                                </h3>
                                <p class="summary">I am familiar with various CMS platforms, such as Joomla!, Wordpress, and TYPO3. Plugin and Theme customization is supported.</p>
                                <p>Apart from open source CMS platforms, my team and I could offer dedicated CMS based on specific business needs.</p>
                                <p>My work includes:
                                <ul>
                                    <li>build UI layout to be alike Amazon shopping site,</li>
                                    <li>bulk product import via CSV,</li>
                                    <li>build product thumbnail magnifier lens,</li>
                                    <li>organize and tweak data display on table,</li>
                                    <li>build ebook preview simulation.</li>
                                </ul>
                                </p>
                                <p><a class="more-link cms_screenshots" href="#" target="_blank"><i class="fas fa-external-link-alt"></i>More Screenshots</a></p>
                                <p><a class="more-link" href="https://github.com/carsonng/sensai" target="_blank"><i class="fas fa-external-link-alt"></i>View Example Code in Github</a></p>
                            </div>
                            <!--//item-->
                            <div class="item">
                                <h3 class="title"><a href="https://github.com/carsonng/python_scraping" target="_blank">Python + Selenium - Web Scraping Automation Tool <i class="fas fa-external-link-alt"></i></a></h3>
                                <p class="summary">Scraping website content with Python and headless Selenium ChromeDriver</p>
                                <p>
                                    In the course of development, I came across some challenges, such as ajax pagination and image loading, random waiting time and redirection to Cloudflare page. With patient observation and proper refinements on specific functions, the problems could be solved effectively.
                                </p>
                                <p>
                                    There are also cases that scraping is not quite feasible, such as when the captcha is needed, or there are limitation to the number of pages to view or the number of images to download for each registered user account.
                                </p>
                                <p>
                                    The scraped website content would be stored in JSON format as well as image format. Please check the folder json for reference.
                                </p>
                                <p><a class="more-link" href="https://github.com/carsonng/python_scraping" target="_blank"><i class="fas fa-external-link-alt"></i>View Example Code in Github</a></p>
                            </div>
                            <!--//item-->
                            <div class="item">
                                <h3 class="title"><a href="https://github.com/carsonng/booking_stripe_charge" target="_blank">Internal Visa/MasterCard charging system <i class="fas fa-external-link-alt"></i></a>
                                </h3>
                                <p class="summary">Direct credit/debit card charging system via Stripe API.</p>
                                <p>It was forked from https://github.com/stripe/stripe-php.
                                <p>My work includes:
                                <ul>
                                    <li>build UI that enables merchant to create customers,</li>
                                    <li>charge customers by their credit card details,</li>
                                    <li>switch between different Stripe live or test account(s),</li>
                                    <li>log the charge history.</li>
                                </ul>
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

                        <div id="github-graph" class="github-graph">

                        </div>
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
            </div>
            <!--//primary-->
            <div class="secondary col-lg-4 col-12">
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
                                My team and I specialize in Business Management Software (ERP, CRM, HRM, POS,
                                CMS), E-learning, and E-Commerce. We understand various languages:</p>
                            <div class="skillset">

                                <div class="item">
                                    <h3 class="level-title">PHP & Laravel<span class="level-label" data-bs-toggle="tooltip" data-placement="left" title="You can use the tooltip to explain more about your skill level..."><i class="fas fa-info-circle"></i>Expert</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="94"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->


                                <div class="item">
                                    <h3 class="level-title">Node.js & React<span class="level-label" data-bs-toggle="tooltip" data-placement="left" title="You can use the tooltip to explain more about your skill level..."><i class="fas fa-info-circle"></i>Pro</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 86%" aria-valuenow="86" aria-valuemin="0" aria-valuemax="96"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <div class="item">
                                    <h3 class="level-title">Javascript &amp; jQuery<span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="You can use the tooltip to explain more about your skill level..."><i class="fas fa-info-circle"></i>Expert</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="94"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <div class="item">
                                    <h3 class="level-title">HTML5, CSS3, SASS &amp; LESS<span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="You can use the tooltip to explain more about your skill level..."><i class="fas fa-info-circle"></i>Expert</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 93%" aria-valuenow="93" aria-valuemin="0" aria-valuemax="96"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <div class="item">
                                    <h3 class="level-title">Flutter<span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="You can use the tooltip to explain more about your skill level..."><i class="fas fa-info-circle"></i>Pro</span></h3>
                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 86%" aria-valuenow="86" aria-valuemin="0" aria-valuemax="96"></div>
                                    </div>
                                    <!--//level-bar-->
                                </div>
                                <!--//item-->

                                <div class="item">
                                    <h3 class="level-title">Python &amp; Selenium<span class="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="You can use the tooltip to explain more about your skill level..."><i class="fas fa-info-circle"></i>Pro</span></h3>

                                    <div class="level-bar progress">
                                        <div class="progress-bar level-bar-inner" role="progressbar" style="width: 96%" aria-valuenow="96" aria-valuemin="0" aria-valuemax="96"></div>
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
                            <!-- <div class="item">
                                <h3 class="title"><i class="fas fa-graduation-cap"></i> BSc Computer Science</h3>
                                <h4 class="university">University of Bristol <span class="year">(2013-2017)</span></h4>
                            </div> -->
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
            <!--/* This template is free as long as you keep the attribution link below. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com */-->
            <!-- <small class="copyright">Designed with <span class="sr-only">love</span><i class="fas fa-heart"></i> by <a
                    href="https://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small> -->
            <small class="copyright">© <?php echo date("Y"); ?> Chi Tsun Ng (Carson). All Rights Reserved.</small>
        </div>
        <!--//container-->
    </footer>
    <!--//footer-->

    <!-- Javascript -->
    <script type="text/javascript" src="assets/plugins/popper.min.js"></script>
    <script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="assets/plugins/vanilla-rss/dist/rss.global.min.js"></script>
    <script type="text/javascript" src="assets/plugins/dark-mode-switch/dark-mode-switch.min.js"></script>
    <!-- github calendar plugin -->
    <script type="text/javascript" src="assets/plugins/github-calendar/dist/github-calendar.min.js"></script>
    <!-- github activity plugin -->
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js"></script>
    <script type="text/javascript" src="assets/plugins/github-activity/src/github-activity.js"></script>

    <!-- lightgallery plugins -->
    <script type="text/javascript" src="assets/plugins/lightgallery/lightgallery.umd.car.js"></script>
    <script type="text/javascript" src="assets/plugins/lightgallery/plugins/thumbnail/lg-thumbnail.min.js"></script>

    <!-- custom js -->
    <script type="text/javascript" src="assets/js/main.js"></script>
</body>

</html>