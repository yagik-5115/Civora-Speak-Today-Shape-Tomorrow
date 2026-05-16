document.addEventListener("DOMContentLoaded", function () {
    lucide.createIcons();
    // Translations object
    const translations = {
            en: {
                appName: "CivicVoice",
                navFeatures: "Features",
                navProcess: "Process",
                navReports: "Reports",
                navRewards: "Rewards",
                navImpact: "Impact",
                navVoices: "Voices",
                navFaq: "FAQ",
                citizenLogin: "Login",
                officialLogin: "Official Login",
                navFeaturesMobile: "Features",
                navProcessMobile: "Process",
                navReportsMobile: "Reports",
                navRewardsMobile: "Rewards",
                navImpactMobile: "Impact",
                navVoicesMobile: "Voices",
                navFaqMobile: "FAQ",
                citizenLoginMobile: "Citizen Login",
                officialLoginMobile: "Official Login",
                heroTitle: "Your Voice, <br><span class=\"text-teal-600\">Our City's Future.</span>",
                heroSubtitle: "Report civic issues, track their resolution, and collaborate with your community to build a better neighborhood. It's civic engagement, simplified.",
                locationLabel: "Select your location to get started",
                selectState: "Select State",
                selectCity: "Select Area/City",
                makeReport: "Make a Report",
                featuresTag: "WHY CIVICVOICE?",
                featuresTitle: "A Platform Built for Change",
                feature1Title: "Accessible Reporting",
                feature1Desc: "Snap a photo or simply use your voice in any regional language to submit a report effortlessly.",
                feature2Title: "Transparent Tracking",
                feature2Desc: "Get real-time updates and notifications as your report moves from acknowledged to resolved.",
                feature3Title: "Community Prioritization",
                feature3Desc: "Upvote existing issues to highlight their priority. Let the authorities know what matters most.",
                feature4Title: "Hyperlocal Focus",
                feature4Desc: "Select your specific state and city to view and report issues that are relevant to your community.",
                feature5Title: "Earn Community Rewards",
                feature5Desc: "Get points for valid reports and verifications. Redeem them for cash rewards and climb the community leaderboard.",
                feature6Title: "Secure User Portals",
                feature6Desc: "Separate, secure login portals for citizens and government officials ensure data privacy and integrity.",
                processTag: "3 EASY STEPS",
                processTitle: "See It. Report It. Get It Fixed.",
                processSubtitle: "We've designed a simple, transparent process to connect you directly with the departments that can make a difference.",
                step1Title: "1. Report in Seconds",
                step1Desc: "Our intuitive form guides you to provide all necessary details quickly.",
                step2Title: "2. Direct to the Right Team",
                step2Desc: "We intelligently route your issue to the correct municipal department, saving time.",
                step3Title: "3. Close the Loop",
                step3Desc: "Get a final notification and photo proof when the issue is resolved.",
                reportsTag: "LIVE FEED",
                reportsTitle: "Live Community Reports",
                reportsSubtitle: "See what's happening in your community in real-time. Your engagement helps prioritize action.",
                ongoingIssuesTab: "Ongoing Issues",
                solvedIssuesTab: "Recently Solved",
                categoryRoads: "Roads",
                ongoingReport1Title: "Large Pothole on Main St.",
                categoryWaste: "Waste",
                ongoingReport2Title: "Garbage Overflow near Park",
                categoryProperty: "Property",
                ongoingReport4Title: "Damaged fence at garden",
                categoryInfrastructure: "Infrastructure",
                solvedReport1Title: "Broken Streetlight Fixed",
                categoryParks: "Parks",
                solvedReport2Title: "Park pathway cleaned",
                statusResolved: "Resolved 4 days ago",
                statusResolved2: "Resolved 1 week ago",
                rewardsTag: "BECOME A CHAMPION",
                rewardsTitle: "Earn Rewards for Your Contribution",
                rewardsSubtitle: "We believe active citizenship should be recognized. Our rewards system encourages you to make a tangible impact on your community.",
                reward1Title: "Report & Earn Points",
                reward1Desc: "Receive points for every valid issue you report that gets acknowledged by the authorities.",
                reward2Title: "Verify Resolutions",
                reward2Desc: "Help us confirm when an issue is properly resolved and earn bonus points for your verification.",
                reward3Title: "Redeem for Cash Rewards",
                reward3Desc: "Accumulate points and redeem them for exciting cash rewards, vouchers, and other perks.",
                redeemTitle: "Redeem Your Points",
                redeemSubtitle: "Turn your community efforts into tangible rewards. Here’s what you can get with your points.",
                yourBalance: "Your Balance",
                points: "Points",
                redeemCashTitle: "₹100 Cash Reward",
                redeemVoucherTitle: "Shopping Voucher",
                redeemButton: "Redeem",
                redeemMainButton: "Redeem Your Points",
                redeemModalTitle: "Choose Your Reward",
                redeemModalSubtitle: "Select one of the options below to redeem your points.",
                impactTitle: "Our Community's Scoreboard",
                impactSubtitle: "Small actions, when multiplied by thousands of people, can transform a city.",
                impact1: "Issues Resolved",
                impact2: "Active Citizens",
                impact3: "Average Rating",
                testimonialsTag: "REAL STORIES, REAL IMPACT",
                testimonialsTitle: "What Our Users Are Saying",
                testimonial1: "\"The overflowing garbage bin near my society was a constant problem. Reported it via CivicVoice, and the municipal team cleared it the very next day. This platform actually works!\"",
                testimonial1Location: "Mayur Vihar Resident, Delhi",
                testimonial2: "\"As a municipal officer, CivicVoice streamlines our workflow. The geotagged, photographic evidence is invaluable. It helps us prioritize and resolve citizen grievances faster than ever.\"",
                testimonial2Role: "Municipal Corporation Official",
                testimonial3: "\"It's empowering to see my report getting upvoted by neighbours. We managed to get a new streetlight installed in our lane by showing collective demand through the app.\"",
                testimonial3Location: "Dwarka Community Member",
                faqTag: "HAVE QUESTIONS?",
                faqTitle: "Frequently Asked Questions",
                faq1Question: "What kind of issues can I report?",
                faq1Answer: "You can report a wide range of non-emergency issues such as potholes, broken streetlights, garbage overflow, water logging, damaged public property, and more. If you're unsure, it's always best to report it.",
                faq2Question: "Is my data private?",
                faq2Answer: "Yes, absolutely. While the location and description of the issue are public, your personal information (name, contact details) is kept confidential and is only shared with the relevant municipal authorities for communication regarding your report.",
                faq3Question: "Is the service available in my city?",
                faq3Answer: "We are actively expanding our network of partner municipalities. Currently, we are operational in Delhi, Mumbai, and Bangalore. Sign up to be notified when we launch in your city!",
                askTitle: "Still Have Questions?",
                askSubtitle: "If you couldn't find an answer in our FAQ, feel free to ask us directly.",
                formName: "Your Name",
                formEmail: "Email Address",
                formQuestion: "Your Question",
                formSubmit: "Submit Question",
                ctaTitle: "Ready to Make a Difference?",
                ctaSubtitle: "Join thousands of citizens improving our city, one report at a time. It's free, easy, and effective.",
                ctaButton: "Sign Up & Start Reporting",
                footerAppName: "CivicVoice",
                footerSlogan: "Your Voice, Amplified.",
                footerPlatform: "Platform",
                footerFeatures: "Features",
                footerGov: "For Governments",
                footerSuccess: "Success Stories",
                footerCompany: "Company",
                footerAbout: "About Us",
                footerCareers: "Careers",
                footerContact: "Contact",
                footerLegal: "Legal",
                footerPrivacy: "Privacy Policy",
                footerTerms: "Terms of Service",
                footerConnect: "Connect",
                footerCredit: "&copy; 2025 CivicVoice. Made with ❤ in India.",
                modalCitizenTab: "Citizen",
                modalOfficialTab: "Official Login",
                modalCitizenTitle: "Welcome!",
                modalCitizenSubtitle: "Enter your details to login or sign up.",
                modalCitizenInputLabel: "Phone Number or Gmail",
                modalCitizenButton: "Send OTP",
                modalOfficialTitle: "Official Portal",
                modalOfficialSubtitle: "Login with your employee credentials.",
                modalOfficialInput1: "Employee ID",
                modalOfficialInput2: "Password",
                modalOfficialButton: "Login",
                modalForgotPassword: "Forgot password?",
                modalOtpTitle: "Enter OTP",
                modalOtpSubtitle: "An OTP has been sent to your device.",
                modalOtpButton: "Verify & Login",
                reportModalTitle: "Report a Civic Issue",
                reportStep1: "Details",
                reportStep2: "Location",
                reportStep3: "Submit",
                reportCategory: "Issue Category",
                reportPhoto: "Upload Photo",
                reportUpload: "Upload a file",
                reportDescription: "Description",
                reportLocationConfirm: "Please confirm the location of the issue.",
                reportAddress: "Address / Landmark",
                reportCurrentLocation: "Use my current location",
                reportContactInfo: "Provide your contact information (optional) to receive updates.",
                reportSuccessTitle: "Report Submitted!",
                reportSuccessSub: "Thank you for helping improve your community. Your report has been sent to the relevant department.",
                reportSuccessID: "Your Tracking ID is:",
                reportByVoice: "Record by Voice",
                listening: "Listening...",
                trackReportNav: "Track Report",
                trackReportNavMobile: "Track Report",
                trackModalTitle: "Track Your Report",
                trackModalSubtitle: "Enter the tracking ID you received after submission.",
                trackModalInputLabel: "Tracking ID",
                trackModalButton: "Track Status",
                trackStatusTitle: "Report Status",
                trackStep1: "Reported",
                trackStep1Desc: "Your report has been successfully submitted.",
                trackStep2: "Acknowledged",
                trackStep2Desc: "The relevant department has received your report.",
                trackStep3: "In Progress",
                trackStep3Desc: "Work has begun to resolve the issue.",
                trackStep4: "Resolved",
                trackStep4Desc: "The issue has been fixed. Thank you!",
                trackAnotherButton: "Track Another Report",
            },
            hi: {
                appName: "सिविकवॉइस",
                navFeatures: "विशेषताएँ",
                navProcess: "प्रक्रिया",
                navReports: "रिपोर्ट",
                navRewards: "पुरस्कार",
                navImpact: "प्रभाव",
                navVoices: "आवाज़ें",
                navFaq: "FAQ",
                citizenLogin: "लॉगिन",
                officialLogin: "आधिकारिक लॉगिन",
                navFeaturesMobile: "विशेषताएँ",
                navProcessMobile: "प्रक्रिया",
                navReportsMobile: "रिपोर्ट",
                navRewardsMobile: "पुरस्कार",
                navImpactMobile: "प्रभाव",
                navVoicesMobile: "आवाज़ें",
                navFaqMobile: "FAQ",
                citizenLoginMobile: "नागरिक लॉगिन",
                officialLoginMobile: "आधिकारिक लॉगिन",
                heroTitle: "आपकी आवाज़, <br><span class=\"text-teal-600\">हमारे शहर का भविष्य।</span>",
                heroSubtitle: "नागरिक मुद्दों की रिपोर्ट करें, उनके समाधान को ट्रैक करें, और एक बेहतर पड़ोस बनाने के लिए अपने समुदाय के साथ सहयोग करें। यह नागरिक जुड़ाव है, सरलीकृत।",
                locationLabel: "शुरू करने के लिए अपना स्थान चुनें",
                selectState: "राज्य चुनें",
                selectCity: "क्षेत्र/शहर चुनें",
                makeReport: "रिपोर्ट करें",
                featuresTag: "सिविकवॉइस क्यों?",
                featuresTitle: "बदलाव के लिए बनाया गया एक मंच",
                feature1Title: "सुलभ रिपोर्टिंग",
                feature1Desc: "एक तस्वीर खींचें या बस अपनी क्षेत्रीय भाषा में अपनी आवाज़ का उपयोग करके आसानी से रिपोर्ट दर्ज करें।",
                feature2Title: "पारदर्शी ट्रैकिंग",
                feature2Desc: "आपकी रिपोर्ट स्वीकृत होने से लेकर हल होने तक वास्तविक समय के अपडेट और सूचनाएं प्राप्त करें।",
                feature3Title: "सामुदायिक प्राथमिकता",
                feature3Desc: "मौजूदा मुद्दों को उनकी प्राथमिकता को उजागर करने के लिए अपवोट करें। अधिकारियों को बताएं कि सबसे ज्यादा क्या मायने रखता है।",
                feature4Title: "हाइपरलोकल फोकस",
                feature4Desc: "अपने समुदाय से संबंधित मुद्दों को देखने और रिपोर्ट करने के लिए अपना विशिष्ट राज्य और शहर चुनें।",
                feature5Title: "सामुदायिक पुरस्कार अर्जित करें",
                feature5Desc: "मान्य रिपोर्ट और सत्यापन के लिए अंक प्राप्त करें। उन्हें नकद पुरस्कार के लिए भुनाएं और सामुदायिक लीडरबोर्ड पर चढ़ें।",
                feature6Title: "सुरक्षित उपयोगकर्ता पोर्टल",
                feature6Desc: "नागरिकों और सरकारी अधिकारियों के लिए अलग, सुरक्षित लॉगिन पोर्टल डेटा गोपनीयता और अखंडता सुनिश्चित करते हैं।",
                processTag: "३ आसान चरण",
                processTitle: "देखें। रिपोर्ट करें। इसे ठीक करवाएं।",
                processSubtitle: "हमने आपको सीधे उन विभागों से जोड़ने के लिए एक सरल, पारदर्शी प्रक्रिया तैयार की है जो एक अंतर ला सकते हैं।",
                step1Title: "१. सेकंड में रिपोर्ट करें",
                step1Desc: "हमारा सहज ज्ञान युक्त फॉर्म आपको सभी आवश्यक विवरण जल्दी से प्रदान करने के लिए मार्गदर्शन करता है।",
                step2Title: "२. सही टीम को सीधे भेजें",
                step2Desc: "हम बुद्धिमानी से आपके मुद्दे को सही नगरपालिका विभाग में भेजते हैं, जिससे समय की बचत होती है।",
                step3Title: "३. लूप को बंद करें",
                step3Desc: "समस्या हल होने पर अंतिम सूचना और फोटो प्रमाण प्राप्त करें।",
                reportsTag: "लाइव फीड",
                reportsTitle: "लाइव सामुदायिक रिपोर्ट",
                reportsSubtitle: "देखें कि आपके समुदाय में वास्तविक समय में क्या हो रहा है। आपकी सहभागिता कार्रवाई को प्राथमिकता देने में मदद करती है।",
                ongoingIssuesTab: "चल रहे मुद्दे",
                solvedIssuesTab: "हाल ही में हल",
                categoryRoads: "सड़कें",
                ongoingReport1Title: "मुख्य सड़क पर बड़ा गड्ढा।",
                categoryWaste: "कचरा",
                ongoingReport2Title: "पार्क के पास कचरा ओवरफ्लो",
                categoryProperty: "संपत्ति",
                ongoingReport4Title: "बगीचे में टूटी बाड़",
                categoryInfrastructure: "आधारभूत संरचना",
                solvedReport1Title: "टूटी स्ट्रीटलाइट ठीक हुई",
                categoryParks: "पार्क",
                solvedReport2Title: "पार्क का रास्ता साफ किया गया",
                statusResolved: "4 दिन पहले हल किया गया",
                statusResolved2: "1 सप्ताह पहले हल किया गया",
                rewardsTag: "एक चैंपियन बनें",
                rewardsTitle: "अपने योगदान के लिए पुरस्कार अर्जित करें",
                rewardsSubtitle: "हमारा मानना ​​है कि सक्रिय नागरिकता को मान्यता मिलनी चाहिए। हमारी पुरस्कार प्रणाली आपको अपने समुदाय पर एक ठोस प्रभाव डालने के लिए प्रोत्साहित करती है।",
                reward1Title: "रिपोर्ट करें और अंक अर्जित करें",
                reward1Desc: "आपके द्वारा रिपोर्ट किए गए प्रत्येक मान्य मुद्दे के लिए अंक प्राप्त करें जिसे अधिकारी स्वीकार करते हैं।",
                reward2Title: "संकल्पों को सत्यापित करें",
                reward2Desc: "जब कोई समस्या ठीक से हल हो जाए तो हमें पुष्टि करने में मदद करें और अपने सत्यापन के लिए बोनस अंक अर्जित करें।",
                reward3Title: "नकद पुरस्कार के लिए भुनाएं",
                reward3Desc: "अंक जमा करें और उन्हें रोमांचक नकद पुरस्कार, वाउचर और अन्य भत्तों के लिए भुनाएं।",
                redeemTitle: "अपने अंक भुनाएं",
                redeemSubtitle: "अपने सामुदायिक प्रयासों को वास्तविक पुरस्कारों में बदलें। यहाँ आप अपने अंकों के साथ क्या प्राप्त कर सकते हैं।",
                yourBalance: "आपका बैलेंस",
                points: "अंक",
                redeemCashTitle: "₹100 नकद इनाम",
                redeemVoucherTitle: "शॉपिंग वाउचर",
                redeemButton: "भुनाएं",
                redeemMainButton: "अपने अंक भुनाएं",
                redeemModalTitle: "अपना इनाम चुनें",
                redeemModalSubtitle: "अपने अंक भुनाने के लिए नीचे दिए गए विकल्पों में से एक का चयन करें।",
                impactTitle: "हमारे समुदाय का स्कोरबोर्ड",
                impactSubtitle: "छोटे कार्य, जब हजारों लोगों द्वारा गुणा किए जाते हैं, तो एक शहर को बदल सकते हैं।",
                impact1: "मुद्दे हल हुए",
                impact2: "सक्रिय नागरिक",
                impact3: "औसत रेटिंग",
                testimonialsTag: "असली कहानियाँ, असली प्रभाव",
                testimonialsTitle: "हमारे उपयोगकर्ता क्या कह रहे हैं",
                testimonial1: "\"मेरे समाज के पास ओवरफ्लो हो रहा कूड़ेदान एक निरंतर समस्या थी। सिविकवॉइस के माध्यम से इसकी सूचना दी, और अगले ही दिन नगर निगम की टीम ਨੇ इसे साफ कर दिया। यह मंच वास्तव में काम करता है!\"",
                testimonial1Location: "मयूर विहार निवासी, दिल्ली",
                testimonial2: "\"एक नगर निगम अधिकारी के रूप में, सिविकवॉइस हमारे वर्कफ़्लो को सुव्यवस्थित करता है। जियोटैग किए गए, फोटोग्राफिक सबूत अमूल्य हैं। यह हमें नागरिक शिकायतों को प्राथमिकता देने और तेजी से हल करने में मदद करता है।\"",
                testimonial2Role: "नगर निगम अधिकारी",
                testimonial3: "\"यह देखकर सशक्त महसूस होता है कि मेरी रिपोर्ट को पड़ोसियों द्वारा अपवोट किया जा रहा है। हमने ऐप के माध्यम से सामूहिक मांग दिखाकर अपनी गली में एक नई स्ट्रीटलाइट लगवाई।\"",
                testimonial3Location: "द्वारका समुदाय सदस्य",
                faqTag: "प्रश्न हैं?",
                faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
                faq1Question: "मैं किस तरह के मुद्दों की रिपोर्ट कर सकता हूं?",
                faq1Answer: "आप गड्ढों, टूटी स्ट्रीटलाइट्स, कचरा ओवरफ्लो, जलभराव, क्षतिग्रस्त सार्वजनिक संपत्ति, और बहुत कुछ जैसे गैर-आपातकालीन मुद्दों की एक विस्तृत श्रृंखला की रिपोर्ट कर सकते हैं। यदि आप अनिश्चित हैं, तो रिपोर्ट करना हमेशा सबसे अच्छा होता है।",
                faq2Question: "क्या मेरा डेटा निजी है?",
                faq2Answer: "हाँ, बिल्कुल। जबकि मुद्दे का स्थान और विवरण सार्वजनिक है, आपकी व्यक्तिगत जानकारी (नाम, संपर्क विवरण) गोपनीय रखी जाती है और केवल आपकी रिपोर्ट के संबंध में संचार के लिए संबंधित नगरपालिका अधिकारियों के साथ साझा की जाती है।",
                faq3Question: "क्या यह सेवा मेरे शहर में उपलब्ध है?",
                faq3Answer: "हम सक्रिय रूप से अपने भागीदार नगर पालिकाओं के नेटवर्क का विस्तार कर रहे हैं। वर्तमान में, हम दिल्ली, मुंबई और बैंगलोर में चालू हैं। जब हम आपके शहर में लॉन्च करेंगे तो अधिसूचित होने के लिए साइन अप करें!",
                askTitle: "अभी भी प्रश्न हैं?",
                askSubtitle: "यदि आपको हमारे FAQ में कोई उत्तर नहीं मिला, तो बेझिझक हमसे सीधे पूछें।",
                formName: "आपका नाम",
                formEmail: "ईमेल पता",
                formQuestion: "आपका सवाल",
                formSubmit: "प्रश्न भेजें",
                ctaTitle: "एक अंतर बनाने के लिए तैयार हैं?",
                ctaSubtitle: "एक समय में एक रिपोर्ट, हमारे शहर को बेहतर बनाने में हजारों नागरिकों से जुड़ें। यह मुफ़्त, आसान और प्रभावी है।",
                ctaButton: "साइन अप करें और रिपोर्टिंग शुरू करें",
                footerAppName: "सिविकवॉइस",
                footerSlogan: "आपकी आवाज़, प्रवर्धित।",
                footerPlatform: "मंच",
                footerFeatures: "विशेषताएँ",
                footerGov: "सरकारों के लिए",
                footerSuccess: "सफलता की कहानियाँ",
                footerCompany: "कंपनी",
                footerAbout: "हमारे बारे में",
                footerCareers: "करियर",
                footerContact: "संपर्क",
                footerLegal: "कानूनी",
                footerPrivacy: "गोपनीयता नीति",
                footerTerms: "सेवा की शर्तें",
                footerConnect: "जुड़ें",
                footerCredit: "&copy; २०२५ सिविकवॉइस। भारत में ❤ के साथ बनाया गया।",
                modalCitizenTab: "नागरिक",
                modalOfficialTab: "आधिकारिक लॉगिन",
                modalCitizenTitle: "स्वागत है!",
                modalCitizenSubtitle: "लॉगिन या साइन अप करने के लिए अपना विवरण दर्ज करें।",
                modalCitizenInputLabel: "फोन नंबर या जीमेल",
                modalCitizenButton: "ओटीपी भेजें",
                modalOfficialTitle: "आधिकारिक पोर्टल",
                modalOfficialSubtitle: "अपने कर्मचारी क्रेडेंशियल्स के साथ लॉगिन करें।",
                modalOfficialInput1: "कर्मचारी आयडी",
                modalOfficialInput2: "पासवर्ड",
                modalOfficialButton: "लॉगिन",
                modalForgotPassword: "पासवर्ड भूल गए?",
                modalOtpTitle: "ओटीपी दर्ज करें",
                modalOtpSubtitle: "आपके डिवाइस पर एक ओटीपी भेजा गया है।",
                modalOtpButton: "सत्यापित करें और लॉगिन करें",
                reportModalTitle: "नागरिक समस्या की रिपोर्ट करें",
                reportStep1: "विवरण",
                reportStep2: "स्थान",
                reportStep3: "सबमिट करें",
                reportCategory: "समस्या श्रेणी",
                reportPhoto: "फोटो अपलोड करें",
                reportUpload: "एक फ़ाइल अपलोड करें",
                reportDescription: "विवरण",
                reportLocationConfirm: "कृपया समस्या का स्थान पुष्टि करें।",
                reportAddress: "पता / लैंडमार्क",
                reportCurrentLocation: "मेरे वर्तमान स्थान का उपयोग करें",
                reportContactInfo: "अपडेट प्राप्त करने के लिए अपनी संपर्क जानकारी (वैकल्पिक) प्रदान करें।",
                reportSuccessTitle: "रिपोर्ट सबमिट की गई!",
                reportSuccessSub: "अपने समुदाय को बेहतर बनाने में मदद करने के लिए धन्यवाद। आपकी रिपोर्ट संबंधित विभाग को भेज दी गई है।",
                reportSuccessID: "आपका ट्रैकिंग आईडी है:",
                reportByVoice: "आवाज़ से रिकॉर्ड करें",
                listening: "सुन रहा है...",
                trackReportNav: "रिपोर्ट ट्रैक करें",
                trackReportNavMobile: "रिपोर्ट ट्रैक करें",
                trackModalTitle: "अपनी रिपोर्ट ट्रैक करें",
                trackModalSubtitle: "सबमिशन के बाद प्राप्त ट्रैकिंग आईडी दर्ज करें।",
                trackModalInputLabel: "ट्रैकिंग आईडी",
                trackModalButton: "स्थिति ट्रैक करें",
                trackStatusTitle: "रिपोर्ट की स्थिति",
                trackStep1: "रिपोर्ट किया गया",
                trackStep1Desc: "आपकी रिपोर्ट सफलतापूर्वक सबमिट कर दी गई है।",
                trackStep2: "स्वीकृत",
                trackStep2Desc: "संबंधित विभाग को आपकी रिपोर्ट मिल गई है।",
                trackStep3: "प्रगति में है",
                trackStep3Desc: "समस्या को हल करने के लिए काम शुरू हो गया है।",
                trackStep4: "हल हो गया",
                trackStep4Desc: "समस्या ठीक कर दी गई है। धन्यवाद!",
                trackAnotherButton: "दूसरी रिपोर्ट ट्रैक करें",
            },
        };

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Reveal on scroll
        const scrollObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(section => {
            scrollObserver.observe(section);
        });

        // FAQ Accordion
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                button.parentElement.classList.toggle('open');
            });
        });

        // Location Selector Logic
        const locations = {
            "Andaman and Nicobar Islands": ["Port Blair"],
            "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
            "Arunachal Pradesh": ["Itanagar", "Tawang", "Ziro"],
            "Assam": ["Guwahati", "Dibrugarh", "Silchar"],
            "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Madhubani"],
            "Chandigarh": ["Chandigarh"],
            "Chhattisgarh": ["Raipur", "Bilaspur", "Durg"],
            "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
            "Delhi": ["New Delhi", "North Delhi", "North West Delhi", "West Delhi", "South West Delhi", "South Delhi", "South East Delhi", "Central Delhi", "North East Delhi", "Shahdara", "East Delhi"],
            "Goa": ["Panaji", "Margao", "Vasco da Gama"],
            "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
            "Haryana": ["Gurgaon", "Faridabad", "Chandigarh", "Panipat"],
            "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
            "Jammu and Kashmir": ["Srinagar", "Jammu"],
            "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
            "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi"],
            "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
            "Ladakh": ["Leh", "Kargil"],
            "Lakshadweep": ["Kavaratti"],
            "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior"],
            "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane"],
            "Manipur": ["Imphal"],
            "Meghalaya": ["Shillong"],
            "Mizoram": ["Aizawl"],
            "Nagaland": ["Kohima", "Dimapur"],
            "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
            "Puducherry": ["Puducherry"],
            "Punjab": ["Ludhiana", "Amritsar", "Jalandhar"],
            "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
            "Sikkim": ["Gangtok"],
            "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
            "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
            "Tripura": ["Agartala"],
            "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Noida", "Agra", "Varanasi"],
            "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh"],
            "West Bengal": ["Kolkata", "Howrah", "Asansol", "Silguri"]
        };

        const stateSelect = document.getElementById('state-select');
        const citySelect = document.getElementById('city-select');

        stateSelect.addEventListener('change', (e) => {
            const selectedState = e.target.value;
            citySelect.innerHTML = '<option selected disabled>Select Area/City</option>';
            if (selectedState && locations[selectedState]) {
                citySelect.disabled = false;
                locations[selectedState].forEach(city => {
                    const option = document.createElement('option');
                    option.value = city;
                    option.textContent = city;
                    citySelect.appendChild(option);
                });
            } else {
                citySelect.disabled = true;
            }
        });

        // --- MODAL LOGIC ---

        // Generic Modal Open/Close
        const setupModal = (modalId, openBtns, closeBtnId) => {
            const modal = document.getElementById(modalId);
            if (!modal) return {};
            const modalOverlay = modal.querySelector('.modal-overlay');
            const modalContent = modal.querySelector('.modal-content');
            const closeModalBtn = document.getElementById(closeBtnId);

            const openModal = () => {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                setTimeout(() => {
                    modalOverlay.classList.remove('opacity-0');
                    modalContent.classList.remove('opacity-0', 'translate-y-8');
                }, 10);
            };
            const closeModal = () => {
                modalOverlay.classList.add('opacity-0');
                modalContent.classList.add('opacity-0', 'translate-y-8');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    document.body.style.overflow = '';
                }, 300);
            };

            openBtns.forEach(btn => btn && btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            }));
            if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
            if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

            return { modal, openModal, closeModal };
        };

        // Login Modal Specific Logic
        const citizenLoginBtns = [document.getElementById('citizen-login-btn-desktop'), document.getElementById('citizen-login-btn-mobile')];
        const officialLoginBtns = [document.getElementById('official-login-btn-desktop'), document.getElementById('official-login-btn-mobile')];
        const { openModal: openLoginModal } = setupModal('login-modal', [], 'close-login-modal-btn');

        const [citizenTab, officialTab, citizenForm, officialForm, citizenStep1, citizenStep2] =
            ['citizen-tab', 'official-tab', 'citizen-form', 'official-form', 'citizen-step-1', 'citizen-step-2'].map(id => document.getElementById(id));

        const switchLoginTab = (showCitizen) => {
            const activeTab = showCitizen ? citizenTab : officialTab;
            const inactiveTab = showCitizen ? officialTab : citizenTab;
            activeTab.className = "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg border-teal-500 text-teal-600";
            inactiveTab.className = "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";

            citizenForm.classList.toggle('hidden', !showCitizen);
            officialForm.classList.toggle('hidden', showCitizen);

            if (showCitizen) {
                citizenStep1.classList.remove('hidden');
                citizenStep2.classList.add('hidden');
            }
        };

        citizenLoginBtns.forEach(btn => btn && btn.addEventListener('click', (e) => { e.preventDefault(); openLoginModal(); switchLoginTab(true); }));
        officialLoginBtns.forEach(btn => btn && btn.addEventListener('click', (e) => { e.preventDefault(); openLoginModal(); switchLoginTab(false); }));
        citizenTab.addEventListener('click', () => switchLoginTab(true));
        officialTab.addEventListener('click', () => switchLoginTab(false));

        // --- NEW: Event listener for the main CTA button ---
        const ctaSignupBtn = document.getElementById('cta-signup-btn');
        if (ctaSignupBtn) {
            ctaSignupBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openLoginModal(); // This function is already in your code
                switchLoginTab(true); // This function is also in your code
            });
        }

        // --- UPDATED: Citizen Form Submission with Backend Logic ---
        document.getElementById('citizen-otp-form').addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent the form from reloading the page

            const contactInput = document.getElementById('citizen-contact');
            const contactValue = contactInput.value.trim();

            if (!contactValue) {
                alert('Please enter a phone number or Gmail address.');
                return;
            }

            try {
                // Send the contact info to your backend server
                const response = await fetch('http://localhost:3000/api/send-otp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ contact: contactValue }),
                });

                const result = await response.json();

                if (response.ok) {
                    console.log('Backend response:', result); // For debugging
                    alert(`OTP Sent (Simulated): ${result.otp}`); // Show simulated OTP

                    // If backend call is successful, then switch to the OTP screen
                    citizenStep1.classList.add('hidden');
                    citizenStep2.classList.remove('hidden');
                } else {
                    // If the backend returns an error
                    throw new Error(result.message || 'Failed to send OTP.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert(`An error occurred: ${error.message}`);
            }
        });

        document.getElementById('back-to-login-btn').addEventListener('click', () => {
            citizenStep2.classList.add('hidden');
            citizenStep1.classList.remove('hidden');
        });

        // Report Modal Specific Logic
        const { closeModal: closeReportModal } = setupModal('report-modal', [document.getElementById('make-report-btn')], 'close-report-modal-btn');
        document.getElementById('close-success-btn').addEventListener('click', closeReportModal);

        const reportFormContent = document.getElementById('report-form-content');
        const reportSuccessMessage = document.getElementById('report-success-message');
        const reportStep1Form = document.getElementById('report-step-1-form');
        const voiceRecordingUI = document.getElementById('voice-recording-ui');

        const formSteps = [document.getElementById('form-step-1'), document.getElementById('form-step-2'), document.getElementById('form-step-3')];
        const stepIndicators = [document.getElementById('step-indicator-1'), document.getElementById('step-indicator-2'), document.getElementById('step-indicator-3')];
        const prevBtn = document.getElementById('prev-step-btn');
        const nextBtn = document.getElementById('next-step-btn');
        const submitBtn = document.getElementById('submit-report-btn');
        let currentStep = 0;

        const updateFormSteps = () => {
            formSteps.forEach((step, index) => step.classList.toggle('hidden', index !== currentStep));
            stepIndicators.forEach((indicator, index) => {
                const circle = indicator.querySelector('div');
                const text = indicator.querySelector('span');
                const isActive = index <= currentStep;

                circle.classList.toggle('bg-teal-600', isActive);
                circle.classList.toggle('text-white', isActive);
                circle.classList.toggle('bg-gray-200', !isActive);
                circle.classList.toggle('text-gray-500', !isActive);
                text.classList.toggle('text-teal-600', isActive);
                text.classList.toggle('text-gray-400', !isActive);
            });
            prevBtn.classList.toggle('invisible', currentStep === 0);
            nextBtn.classList.toggle('hidden', currentStep === formSteps.length - 1);
            submitBtn.classList.toggle('hidden', currentStep !== formSteps.length - 1);
        };

        nextBtn.addEventListener('click', () => { if (currentStep < formSteps.length - 1) { currentStep++; updateFormSteps(); } });
        prevBtn.addEventListener('click', () => { if (currentStep > 0) { currentStep--; updateFormSteps(); } });

        document.getElementById('report-form').addEventListener('submit', (e) => {
            e.preventDefault();
            reportFormContent.classList.add('hidden');
            reportSuccessMessage.classList.remove('hidden');
        });

        document.getElementById('record-voice-btn').addEventListener('click', () => {
            reportStep1Form.classList.add('hidden');
            voiceRecordingUI.classList.remove('hidden');
        });

        document.getElementById('stop-recording-btn').addEventListener('click', () => {
            document.getElementById('issue-description').value = "Simulated voice input: 'There is a large pothole in the middle of the road which is causing traffic issues.'";
            voiceRecordingUI.classList.add('hidden');
            reportStep1Form.classList.remove('hidden');
        });

        // Redeem & Track Modals
        setupModal('redeem-modal', [document.getElementById('open-redeem-modal-btn')], 'close-redeem-modal-btn');
        setupModal('track-modal', [document.getElementById('track-report-btn-desktop'), document.getElementById('track-report-btn-mobile')], 'close-track-modal-btn');

        // Track Report Logic
        const trackInputView = document.getElementById('track-input-view');
        const trackStatusView = document.getElementById('track-status-view');
        const trackIdForm = document.getElementById('track-id-form');
        const displayTrackingId = document.getElementById('display-tracking-id');
        const trackingIdInput = document.getElementById('tracking-id');
        const trackAnotherBtn = document.getElementById('track-another-btn');
        const trackingSteps = Array.from(document.querySelectorAll('.tracking-step'));

        const resetTrackingView = () => {
            if (window.progressInterval) clearInterval(window.progressInterval);
            trackingSteps.forEach(step => step.classList.remove('active', 'completed'));
            trackStatusView.classList.add('hidden');
            trackInputView.classList.remove('hidden');
            trackingIdInput.value = '';
        };

        trackIdForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const trackingId = trackingIdInput.value.trim();
            if (!trackingId) return;

            displayTrackingId.textContent = trackingId;
            trackInputView.classList.add('hidden');
            trackStatusView.classList.remove('hidden');
            lucide.createIcons();

            let currentTrackingStep = 0;
            if (window.progressInterval) clearInterval(window.progressInterval);

            const processStep = () => {
                if (currentTrackingStep < trackingSteps.length) {
                    if (currentTrackingStep > 0) {
                        trackingSteps[currentTrackingStep - 1].classList.remove('active');
                        trackingSteps[currentTrackingStep - 1].classList.add('completed');
                    }
                    trackingSteps[currentTrackingStep].classList.add('active');
                    currentTrackingStep++;
                } else {
                    trackingSteps[currentTrackingStep - 1].classList.remove('active');
                    trackingSteps[currentTrackingStep - 1].classList.add('completed');
                    clearInterval(window.progressInterval);
                }
            };
            processStep();
            window.progressInterval = setInterval(processStep, 1500);
        });

        trackAnotherBtn.addEventListener('click', resetTrackingView);
        document.getElementById('close-track-modal-btn').addEventListener('click', resetTrackingView);
        document.querySelector('#track-modal .modal-overlay').addEventListener('click', resetTrackingView);


        // Live Reports Tab Logic
        const [ongoingTab, solvedTab, ongoingGrid, solvedGrid] = ['ongoing-tab', 'solved-tab', 'ongoing-issues-grid', 'solved-issues-grid'].map(id => document.getElementById(id));

        const switchLiveReportTab = (showOngoing) => {
            ongoingTab.classList.toggle('active', showOngoing);
            solvedTab.classList.toggle('active', !showOngoing);
            ongoingGrid.classList.toggle('hidden', !showOngoing);
            solvedGrid.classList.toggle('hidden', showOngoing);
        };
        ongoingTab.addEventListener('click', () => switchLiveReportTab(true));
        solvedTab.addEventListener('click', () => switchLiveReportTab(false));
        // Language translation logic
        const languageSelector = document.getElementById('language-selector');
        const translatePage = (language) => {
            const langData = translations[language];
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (langData && langData[key]) {
                    element.innerHTML = langData[key];
                }
            });
        };
        languageSelector.addEventListener('change', (e) => translatePage(e.target.value));
        translatePage('en'); // Initial translation
});
