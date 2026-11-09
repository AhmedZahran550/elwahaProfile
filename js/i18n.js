/**
 * Bilingual Internationalization Engine (i18n)
 * Arabic (RTL Default) & English (LTR)
 * Alwaha Development (الواحة العقارية)
 */

const I18N_STORAGE_KEY = 'alwaha_lang';

export const translations = {
  ar: {
    // Navigation
    nav_home: 'الرئيسية',
    nav_about: 'عن الواحة',
    nav_projects: 'مشروعاتنا',
    nav_chairman: 'كلمة رئيس المجلس',
    nav_contact: 'تواصل معنا',
    nav_lang_toggle: 'English',
    nav_sound_mute: 'كتم الصوت',
    nav_sound_unmute: 'تشغيل الصوت',
    btn_view_projects: 'استكشف مشروعاتنا',
    btn_contact_us: 'تواصل معنا الآن',
    btn_request_details: 'طلب تفاصيل المشروع',
    btn_all_projects: 'جميع المشروعات',
    btn_send_inquiry: 'إرسال الاستفسار',
    btn_whatsapp: 'محادثة عبر واتساب',
    btn_back_to_projects: 'العودة للمشروعات',
    skip_to_content: 'الانتقال إلى المحتوى الرئيسي',

    // Brand Core
    brand_name: 'الواحة العقارية',
    brand_full: 'شركة الواحة العقارية للتطوير',
    brand_tagline: 'نبني ثقتك قبل أن نبني عقارك',
    brand_founded: 'تأسست عام 2020',
    brand_location: 'الحي المتميز، مدينة بدر، القاهرة',

    // Hero Section
    hero_badge: 'تطوير عقاري راقٍ · الحي المتميز مدينة بدر',
    hero_title: 'نبني ثقتك<br><span class="text-gold-gradient">قبل أن نبني عقارك</span>',
    hero_desc: 'منذ عام 2020، نلتزم في الواحة العقارية بتقديم مجتمعات سكنية متكاملة تجمع بين رقي الموقع، ودقة التنفيذ، والشفافية المطلقة في كل خطوة.',
    hero_scroll: 'مرر لأسفل',
    hero_3d_badge: 'نموذج معماري ثلاثي الأبعاد تفاعلي',

    // Intro Section
    intro_lead: 'تأسست شركة الواحة العقارية عام 2020 كشركة متخصصة في التطوير العقاري الراقي داخل الحي المتميز بمدينة بدر. ومنذ انطلاقتنا ارتبط اسمنا بالأمانة والشفافية ودقة مواعيد التسليم.',
    intro_quote: '«نؤمن أن العقار ليس مجرد جدران، بل بيت يحتضن الأسرة واستثمار يحفظ قيمته عبر السنين.»',

    // Stats Counters
    stat_founded_num: '2020',
    stat_founded_label: 'عام التأسيس والريادة',
    stat_bldgs_num: '7',
    stat_bldgs_label: 'عمارات سكنية فاخرة',
    stat_units_num: '56',
    stat_units_label: 'وحدة سكنية متكاملة',
    stat_per_bldg_num: '8',
    stat_per_bldg_label: 'وحدات فقط بكل عمارة (خصوصية تامة)',

    // Featured Projects
    featured_title: 'مشروعاتنا في الحي المتميز',
    featured_subtitle: 'سبع تحف معمارية بأسماء أزهار تعكس الرقي والهدوء والخصوصية',

    // Why Alwaha
    why_title: 'لماذا يختار عملاؤنا الواحة؟',
    why_subtitle: 'قيم حقيقية تلمسها في كل مرحلة من مراحل الشراء والتنفيذ',
    why_1_title: 'مواقع استراتيجية متميزة',
    why_1_desc: 'جميع مشروعاتنا تقع في أرقى مناطق الحي المتميز بمدينة بدر، بالقرب من العاصمة الإدارية وطريق السويس.',
    why_2_title: 'مساحات مدروسة بعناية',
    why_2_desc: 'وحدات سكنية بمساحات من 140 إلى 180 م² تم تصميمها هندسيًا لاستغلال كل متر بأعلى كفاءة وراحة.',
    why_3_title: 'أعلى معايير التنفيذ والجودة',
    why_3_desc: 'واجهات معمارية كلاسيكية حديثة، ومداخل فندقية من الرخام الفاخر، ومصاعد إيطالية وتشطيبات راقية.',
    why_4_title: 'أمانة وشفافية مطلقة',
    why_4_desc: 'عقود واضحة، التزام تام بمواعيد التسليم، وجداول دفع مرنة تضمن مصلحة شركائنا.',
    why_5_title: 'مرافقة العميل حتى التسليم',
    why_5_desc: 'فريق استشاري وخدمة عملاء يرافقك خطوة بخطوة من المعاينة والتعاقد وحتى استلام وحدتك.',

    // Chairman Teaser & Message
    chairman_teaser_title: 'كلمة رئيس مجلس الإدارة',
    chairman_name: 'م. محمود عبدالمعطي',
    chairman_title_role: 'رئيس مجلس إدارة الواحة العقارية',
    chairman_quote_lead: 'ثقتكم أولًا.. في الواحة العقارية نؤمن أن العقار ليس مجرد جدران، بل بيت يحتضن الأسرة واستثمار يحفظ قيمته عبر السنين.',
    chairman_read_more: 'قراءة الكلمة كاملة',

    // Contact Band
    contact_band_title: 'هل ترغب في امتلاك وحدتك بالحي المتميز؟',
    contact_band_desc: 'فريق مبيعات الواحة في خدمتكم للإجابة عن كافة الاستفسارات وترتيب المعاينات الميدانية.',
    sales_service: 'المبيعات وخدمة العملاء',
    management_num: 'الإدارة العامة',

    // Projects Page & Filters
    filter_all: 'جميع المشروعات (7)',
    filter_zone11: 'منطقة 11',
    filter_zone12: 'منطقة 12',
    filter_zone8: 'منطقة 8',
    filter_alain: 'منطقة العين',
    spec_units: 'عدد الوحدات',
    spec_unit_area: 'مساحة الوحدة',
    spec_plot_area: 'مساحة الأرض',
    spec_location: 'الموقع',
    spec_units_val: '8 وحدات سكنية',
    spec_unit_area_val: '140 إلى 180 م²',
    spec_plot_area_val: '450 إلى 550 م²',

    // Project Details Labels
    project_overview: 'نظرة عامة على المشروع',
    project_specs: 'المواصفات الفنية والهندسية',
    project_features: 'مميزات المشروع',
    project_request_title: 'طلب تفاصيل وحجز موعد معاينة',
    prev_project: 'المشروع السابق',
    next_project: 'المشروع التالي',

    // Form
    form_name_label: 'الاسم بالكامل',
    form_name_placeholder: 'اكتب اسمك الكريم',
    form_phone_label: 'رقم الهاتف / الواتساب',
    form_phone_placeholder: '01xxxxxxxxx',
    form_project_label: 'المشروع المراد الاستفسار عنه',
    form_project_select: 'اختر المشروع (اختياري)',
    form_msg_label: 'رسالتك أو تفاصيل استفسارك',
    form_msg_placeholder: 'اكتب استفسارك هنا وسنتواصل معك فورًا...',
    form_submit: 'إرسال طلب المعاينة',
    form_sending: 'جاري الإرسال...',
    form_success: 'تم إرسال استفسارك بنجاح! سيتواصل معك أحد مستشارينا في أقرب وقت.',
    form_error: 'يرجى التأكد من ملء الاسم ورقم الهاتف بشكل صحيح.',

    // About Page Content
    about_story_title: 'قصة الواحة.. ثقة تُبنى خطوة بخطوة',
    about_vision_title: 'رؤيتنا',
    about_vision_text: 'أن نكون الخيار السكني الأول والنموذج الأرقى في التطوير العقاري بمدينة بدر من خلال معايير معمارية استثنائية وثقة تدوم.',
    about_mission_title: 'رسالتنا',
    about_mission_text: 'تقديم مجتمعات سكنية فاخرة تلبي تطلعات عملائنا، مبنية على أسس الأمانة، والشفافية، والالتزام بمواعيد التسليم وجودة البناء.',
    about_goal_title: 'هدفنا',
    about_goal_text: 'تحقيق التوازن والمصلحة المشتركة، وتقديم أعلى قيمة مقابل الاستثمار مع راحة البال الكاملة للمشتري.',
    about_timeline_title: 'مسيرتنا وتطورنا',

    // Footer
    footer_about: 'شركة تطوير عقاري مصرية رائدة متخصصة في المشروعات السكنية الفاخرة بالحي المتميز بمدينة بدر. نضع ثقة عملائنا في مقدمة أولوياتنا.',
    footer_quick_links: 'روابط سريعة',
    footer_contact_info: 'بيانات التواصل',
    footer_rights: 'جميع الحقوق محفوظة © 2026 شركة الواحة العقارية للتطوير.',
    footer_designed_for: 'تصميم يليق بالفخامة العقارية'
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_projects: 'Our Projects',
    nav_chairman: "Chairman's Message",
    nav_contact: 'Contact Us',
    nav_lang_toggle: 'العربية',
    nav_sound_mute: 'Mute Sound',
    nav_sound_unmute: 'Play Sound',
    btn_view_projects: 'Explore Projects',
    btn_contact_us: 'Contact Us Now',
    btn_request_details: 'Request Project Details',
    btn_all_projects: 'All Residences',
    btn_send_inquiry: 'Send Inquiry',
    btn_whatsapp: 'Chat via WhatsApp',
    btn_back_to_projects: 'Back to Projects',
    skip_to_content: 'Skip to main content',

    // Brand Core
    brand_name: 'Alwaha Development',
    brand_full: 'Alwaha Real Estate Development',
    brand_tagline: 'Building Your Trust Before Building Your Property',
    brand_founded: 'Founded in 2020',
    brand_location: 'Al Hay Al Motamayez, Badr City, Cairo, Egypt',

    // Hero Section
    hero_badge: 'Luxury Residential Development · Al Hay Al Motamayez, Badr City',
    hero_title: 'Building Your Trust<br><span class="text-gold-gradient">Before Your Property</span>',
    hero_desc: 'Since 2020, Alwaha Development has been committed to crafting refined boutique residential communities combining prime locations, meticulous execution, and complete transparency.',
    hero_scroll: 'Scroll to explore',
    hero_3d_badge: 'Interactive 3D Architectural Model',

    // Intro Section
    intro_lead: 'Founded in 2020, Alwaha Development specializes in boutique luxury residential properties within Al Hay Al Motamayez, Badr City. From the beginning, our reputation has been built on integrity, transparency, and timely delivery.',
    intro_quote: '"We believe real estate is never just walls; it is a home that embraces family and an investment that preserves value across generations."',

    // Stats Counters
    stat_founded_num: '2020',
    stat_founded_label: 'Year Established',
    stat_bldgs_num: '7',
    stat_bldgs_label: 'Luxury Residences',
    stat_units_num: '56',
    stat_units_label: 'Total Boutique Units',
    stat_per_bldg_num: '8',
    stat_per_bldg_label: 'Exclusive Units per Building',

    // Featured Projects
    featured_title: 'Our Signature Residences',
    featured_subtitle: 'Seven architectural masterpieces named after flowers, embodying serenity and privacy',

    // Why Alwaha
    why_title: 'Why Choose Alwaha?',
    why_subtitle: 'Authentic values reflected at every stage of construction and customer relationship',
    why_1_title: 'Prime Strategic Location',
    why_1_desc: 'All projects are situated in the prestigious Al Hay Al Motamayez in Badr City, in close proximity to the New Capital and Suez Road.',
    why_2_title: 'Thoughtfully Planned Spaces',
    why_2_desc: 'Spacious 140 to 180 m² units engineered to optimize living comfort, airflow, and architectural balance.',
    why_3_title: 'Uncompromised Craft & Quality',
    why_3_desc: 'Neo-classical façades, luxury marble hotel-style lobbies, Italian elevators, and premium materials.',
    why_4_title: 'Absolute Transparency & Trust',
    why_4_desc: 'Clear legal contracts, strict handover commitments, and tailored payment schedules.',
    why_5_title: 'Dedicated Handover Guidance',
    why_5_desc: 'A specialized team accompanies you from initial site inspection through contracting and key handover.',

    // Chairman Teaser & Message
    chairman_teaser_title: "Chairman's Statement",
    chairman_name: 'Eng. Mahmoud Abdelmoaty',
    chairman_title_role: 'Chairman of the Board, Alwaha Development',
    chairman_quote_lead: 'Your trust comes first. At Alwaha, we believe real estate is a sanctuary for families and an enduring store of wealth.',
    chairman_read_more: 'Read Full Statement',

    // Contact Band
    contact_band_title: 'Ready to Own Your Home in Al Hay Al Motamayez?',
    contact_band_desc: 'The Alwaha sales advisory team is at your disposal to answer inquiries and schedule private site visits.',
    sales_service: 'Sales & Customer Relations',
    management_num: 'Executive Administration',

    // Projects Page & Filters
    filter_all: 'All Residences (7)',
    filter_zone11: 'Zone 11',
    filter_zone12: 'Zone 12',
    filter_zone8: 'Zone 8',
    filter_alain: 'Al Ain Zone',
    spec_units: 'Total Units',
    spec_unit_area: 'Unit Area',
    spec_plot_area: 'Plot Area',
    spec_location: 'Location',
    spec_units_val: '8 Exclusive Units',
    spec_unit_area_val: '140 to 180 m²',
    spec_plot_area_val: '450 to 550 m²',

    // Project Details Labels
    project_overview: 'Project Overview',
    project_specs: 'Technical Specifications',
    project_features: 'Distinguished Features',
    project_request_title: 'Request Details & Schedule a Visit',
    prev_project: 'Previous Residence',
    next_project: 'Next Residence',

    // Form
    form_name_label: 'Full Name',
    form_name_placeholder: 'Enter your full name',
    form_phone_label: 'Phone / WhatsApp Number',
    form_phone_placeholder: '01xxxxxxxxx',
    form_project_label: 'Residence of Interest',
    form_project_select: 'Select Residence (Optional)',
    form_msg_label: 'Message / Inquiries',
    form_msg_placeholder: 'Tell us how we can assist you...',
    form_submit: 'Submit Inquiry',
    form_sending: 'Sending...',
    form_success: 'Your inquiry has been received. Our advisory team will reach out shortly.',
    form_error: 'Please provide a valid name and phone number.',

    // About Page Content
    about_story_title: 'The Story of Alwaha: Trust Built Step by Step',
    about_vision_title: 'Our Vision',
    about_vision_text: 'To be the benchmark residential developer in Badr City, creating living spaces defined by timeless architectural grace and enduring trust.',
    about_mission_title: 'Our Mission',
    about_mission_text: 'To deliver boutique residential communities that fulfill the aspirations of families through honesty, transparency, and uncompromised build quality.',
    about_goal_title: 'Our Goal',
    about_goal_text: 'To create long-term shared value, delivering superior return on investment and complete peace of mind for every homeowner.',
    about_timeline_title: 'Our Milestones',

    // Footer
    footer_about: 'A boutique Egyptian real estate development firm dedicated to upscale residential projects in Al Hay Al Motamayez, Badr City.',
    footer_quick_links: 'Quick Navigation',
    footer_contact_info: 'Official Contacts',
    footer_rights: 'All Rights Reserved © 2026 Alwaha Development.',
    footer_designed_for: 'Engineered for Luxury Real Estate'
  }
};

/**
 * Projects Data Registry
 */
export const projectsData = [
  {
    id: 'al-gouri',
    arName: 'عمارة الجوري',
    enName: 'Al Gouri Residence',
    zone: 'zone11',
    zoneNameAr: 'منطقة 11',
    zoneNameEn: 'Zone 11',
    bldgAr: 'عمارة 90، منطقة 11',
    bldgEn: 'Building 90, Zone 11',
    flowerAr: 'الجوري (الورد الدمشقي)',
    flowerEn: 'Damask Rose',
    units: 8,
    unitArea: '140 – 180 م²',
    plotArea: '450 – 550 م²',
    descAr: 'تتميز عمارة الجوري بموقعها الاستراتيجي في قلب المنطقة 11 بالحي المتميز، مع واجهة معمارية عصرية مستوحاة من رقة ونقاء ورد الجوري، ومداخل فندقية رخامية.',
    descEn: 'Al Gouri Residence occupies a prime location in the heart of Zone 11, Al Hay Al Motamayez, featuring contemporary classical elevations and grand marble lobbies.',
    imgPrimary: 'assets/images/projects/al-gouri/facade.jpg',
    imgHover: 'assets/images/projects/al-gouri/site.jpg'
  },
  {
    id: 'al-yasmin',
    arName: 'عمارة الياسمين',
    enName: 'Al Yasmin Residence',
    zone: 'zone11',
    zoneNameAr: 'منطقة 11 المنقول',
    zoneNameEn: 'Zone 11 Al Manqool',
    bldgAr: 'عمارة 88، منطقة 11 المنقول',
    bldgEn: 'Building 88, Zone 11 Al Manqool',
    flowerAr: 'الياسمين',
    flowerEn: 'Jasmine',
    units: 8,
    unitArea: '140 – 180 م²',
    plotArea: '450 – 550 م²',
    descAr: 'تجمع عمارة الياسمين بين رحابة المساحات وتوزيع الغرف المثالي الذي يوفر الخصوصية والراحة التامة للأسرة مع إطلالة مفتوحة على المساحات الخضراء.',
    descEn: 'Al Yasmin Residence blends spacious layouts with optimized family privacy and commanding open views over lush parklands.',
    imgPrimary: 'assets/images/projects/al-yasmin/facade.jpg',
    imgHover: 'assets/images/projects/al-yasmin/site.jpg'
  },
  {
    id: 'al-narges',
    arName: 'عمارة النرجس',
    enName: 'Al Narges Residence',
    zone: 'alain',
    zoneNameAr: 'منطقة العين',
    zoneNameEn: 'Al Ain Zone',
    bldgAr: 'عمارة 10، منطقة العين',
    bldgEn: 'Building 10, Al Ain Zone',
    flowerAr: 'النرجس',
    flowerEn: 'Narcissus',
    units: 8,
    unitArea: '140 – 180 م²',
    plotArea: '450 – 550 م²',
    descAr: 'تنفرد عمارة النرجس بموقع حيوي هادئ في منطقة العين مع شرفات بانورامية واسعة وتصميم واجهات يمزج بين الحجر الطبيعي والزجاج المزدوج العازل للصوت والحرارة.',
    descEn: 'Al Narges Residence is nestled in the serene Al Ain Zone, characterized by wide panoramic balconies and thermal-acoustic double glazing.',
    imgPrimary: 'assets/images/projects/al-narges/facade.jpg',
    imgHover: 'assets/images/projects/al-narges/site.jpg'
  },
  {
    id: 'al-orchid',
    arName: 'عمارة الأوركيد',
    enName: 'Al Orchid Residence',
    zone: 'alain',
    zoneNameAr: 'منطقة العين',
    zoneNameEn: 'Al Ain Zone',
    bldgAr: 'عمارة 22، منطقة العين',
    bldgEn: 'Building 22, Al Ain Zone',
    flowerAr: 'الأوركيد',
    flowerEn: 'Orchid',
    units: 8,
    unitArea: '140 – 180 م²',
    plotArea: '450 – 550 م²',
    descAr: 'تجسد عمارة الأوركيد الفخامة العصرية في أدق تفاصيلها، مع إضاءات ليلية مدروسة ومواقف سيارات خاصة لكل وحدة ومصعد إيطالي حديث.',
    descEn: 'Al Orchid Residence embodies modern luxury in every facet, complete with architectural nocturnal illumination and designated private parking.',
    imgPrimary: 'assets/images/projects/al-orchid/facade.jpg',
    imgHover: 'assets/images/projects/al-orchid/site.jpg'
  },
  {
    id: 'al-tulip',
    arName: 'عمارة التوليب',
    enName: 'Al Tulip Residence',
    zone: 'zone12',
    zoneNameAr: 'منطقة 12',
    zoneNameEn: 'Zone 12',
    bldgAr: 'عمارة 21، منطقة 12',
    bldgEn: 'Building 21, Zone 12',
    flowerAr: 'التوليب',
    flowerEn: 'Tulip',
    units: 8,
    unitArea: '140 – 180 م²',
    plotArea: '450 – 550 م²',
    descAr: 'تقع عمارة التوليب في المنطقة 12 وتتميز بالهدوء التام والقرب من الخدمات الرئيسية ومحاور الطرق المؤدية إلى العاصمة الإدارية وطريق السويس.',
    descEn: 'Located in Zone 12, Al Tulip Residence offers tranquil residential living seconds away from primary arterial routes to the New Administrative Capital.',
    imgPrimary: 'assets/images/projects/al-tulip/facade.jpg',
    imgHover: 'assets/images/projects/al-tulip/site.jpg'
  },
  {
    id: 'al-zanbaq',
    arName: 'عمارة الزنبق',
    enName: 'Al Zanbaq Residence',
    zone: 'zone8',
    zoneNameAr: 'منطقة 8',
    zoneNameEn: 'Zone 8',
    bldgAr: 'عمارة 139، منطقة 8',
    bldgEn: 'Building 139, Zone 8',
    flowerAr: 'الزنبق',
    flowerEn: 'Lily',
    units: 8,
    unitArea: '140 – 180 م²',
    plotArea: '450 – 550 م²',
    descAr: 'عنوان الفخامة في المنطقة 8، مع تصميم خارجي يعكس قوة البناء وأناقة التفاصيل، وتشطيبات مدخل على أعلى مستوى فندقي.',
    descEn: 'The benchmark of prestige in Zone 8, with an architectural envelope reflecting timeless strength and refined hotel-level entry vestibules.',
    imgPrimary: 'assets/images/projects/al-zanbaq/facade.jpg',
    imgHover: 'assets/images/projects/al-zanbaq/site.jpg'
  },
  {
    id: 'al-lotus',
    arName: 'عمارة اللوتس',
    enName: 'Al Lotus Residence',
    zone: 'zone11',
    zoneNameAr: 'منطقة 11',
    zoneNameEn: 'Zone 11',
    bldgAr: 'عمارة 36، منطقة 11',
    bldgEn: 'Building 36, Zone 11',
    flowerAr: 'اللوتس',
    flowerEn: 'Lotus',
    units: 8,
    unitArea: '140 – 180 م²',
    plotArea: '450 – 550 م²',
    descAr: 'تحفة المنطقة 11 المستوحاة من زهرة اللوتس التاريخية؛ تتميز بإطلالة مزدوجة وتهوية طبيعية ممتازة ومساحات داخلية متوازنة تلبي متطلبات العائلات الراقية.',
    descEn: 'Inspired by the historic Egyptian Lotus flower, this Zone 11 residence boasts dual vistas, exceptional natural ventilation, and generous internal geometry.',
    imgPrimary: 'assets/images/projects/al-lotus/facade.jpg',
    imgHover: 'assets/images/projects/al-lotus/site.jpg'
  }
];

export class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem(I18N_STORAGE_KEY) || 'ar';
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindEvents();
  }

  getLang() {
    return this.currentLang;
  }

  t(key) {
    const dict = translations[this.currentLang] || translations.ar;
    return dict[key] || key;
  }

  applyLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem(I18N_STORAGE_KEY, lang);

    const isRtl = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    // Update all data-i18n text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val) {
        // preserve nested elements like svg if data-i18n-target is specified
        const target = el.getAttribute('data-i18n-target');
        if (target === 'html') {
          el.innerHTML = val.replace(/\n/g, '<br>');
        } else {
          el.textContent = val;
        }
      }
    });

    // Update input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.t(key);
      if (val) el.setAttribute('placeholder', val);
    });

    // Update document title if page title key is present
    const pageTitleKey = document.body.getAttribute('data-page-title-key');
    if (pageTitleKey) {
      document.title = `${this.t(pageTitleKey)} | ${this.t('brand_full')}`;
    }

    // Toggle button text
    const langBtn = document.querySelector('.btn-lang-toggle');
    if (langBtn) {
      langBtn.textContent = lang === 'ar' ? 'EN' : 'عربي';
      langBtn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية');
    }

    // Dispatch global custom event for other modules (Three.js, forms)
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, isRtl } }));
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.applyLanguage(nextLang);
  }

  bindEvents() {
    document.querySelectorAll('.btn-lang-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });
    });
  }
}
