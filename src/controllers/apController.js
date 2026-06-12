const curriculumData = {
  'BNSc Student': {
    label: 'BNSc Nursing (4-Year Programme)',
    years: {
      '1': {
        title: 'First Year - Foundation Sciences',
        description: 'Foundation courses in basic sciences, nursing fundamentals, and liberal arts.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'ANA 101', title: 'Human Anatomy I', credits: 3, description: 'Introduction to gross anatomy, musculoskeletal system, and basic histology.' },
              { code: 'PHS 101', title: 'Human Physiology I', credits: 3, description: 'Cell physiology, nerve physiology, muscle physiology, and blood.' },
              { code: 'BCH 101', title: 'Biochemistry I', credits: 2, description: 'Chemistry of biomolecules - proteins, carbohydrates, lipids, and enzymes.' },
              { code: 'NSC 101', title: 'Introduction to Nursing', credits: 3, description: 'History of nursing, nursing theories, ethical principles, and professional roles.' },
              { code: 'PSY 101', title: 'General Psychology', credits: 2, description: 'Learning, motivation, emotion, personality, and human development.' },
              { code: 'SOC 101', title: 'Introduction to Sociology', credits: 2, description: 'Social structures, culture, family, and health sociology.' },
              { code: 'GST 101', title: 'Use of English', credits: 2, description: 'Academic writing, communication skills, and comprehension.' },
              { code: 'GST 102', title: 'Philosophy & Logic', credits: 2, description: 'Critical thinking, logic, and ethical reasoning.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'ANA 102', title: 'Human Anatomy II', credits: 3, description: 'Nervous system, cardiovascular system, respiratory system, and reproductive system.' },
              { code: 'PHS 102', title: 'Human Physiology II', credits: 3, description: 'Cardiovascular, respiratory, renal, digestive, and endocrine physiology.' },
              { code: 'BCH 102', title: 'Biochemistry II', credits: 2, description: 'Metabolism, nutrition, vitamins, minerals, and hormonal regulation.' },
              { code: 'MCB 101', title: 'General Microbiology', credits: 2, description: 'Microorganisms, infection control, immunology basics, and sterilization.' },
              { code: 'NSC 102', title: 'Fundamentals of Nursing', credits: 3, description: 'Basic nursing skills, vital signs, hygiene, mobility, and safety.' },
              { code: 'NSC 103', title: 'Health Assessment', credits: 2, description: 'Physical examination techniques, health history taking, and documentation.' },
              { code: 'GST 103', title: 'Computer Appreciation', credits: 2, description: 'Computer literacy, healthcare informatics basics, and data management.' },
              { code: 'GST 104', title: 'Entrepreneurship', credits: 2, description: 'Business skills, innovation, and nursing entrepreneurship.' },
            ],
          },
        ],
        keyTopics: ['Anatomy & Physiology', 'Nursing fundamentals', 'Health assessment techniques', 'Infection prevention', 'Vital signs measurement', 'Basic patient care'],
        clinicalRotation: ['Observation in general wards', 'Basic nursing skills lab practice'],
        skillsToMaster: ['Hand washing technique', 'Vital signs measurement', 'Bed making', 'Patient positioning', 'Sterile gloving', 'Record keeping'],
        nmcnRelevance: 'Year 1 foundations form the basis for NMCN exam. Focus on anatomy, physiology, and fundamental nursing skills.',
        studyHoursTarget: 120,
      },
      '2': {
        title: 'Second Year - Medical-Surgical Nursing Begins',
        description: 'Core medical-surgical nursing, pharmacology, nutrition, and community health.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'NSC 201', title: 'Medical-Surgical Nursing I', credits: 4, description: 'Perioperative nursing, wound care, fluid/electrolyte balance, and pain management.' },
              { code: 'PHA 201', title: 'Pharmacology I', credits: 3, description: 'Drug classifications, pharmacokinetics, pharmacodynamics, and drug calculations.' },
              { code: 'NUT 201', title: 'Nutrition & Dietetics', credits: 2, description: 'Therapeutic diets, malnutrition, and nutritional assessment.' },
              { code: 'NSC 202', title: 'Community Health Nursing I', credits: 3, description: 'Primary health care, epidemiology, family health, and community assessment.' },
              { code: 'PAT 201', title: 'General Pathology', credits: 2, description: 'Cell injury, inflammation, neoplasia, and wound healing.' },
              { code: 'GST 201', title: 'Nigerian People & Culture', credits: 2, description: 'Cultural diversity and its impact on healthcare delivery.' },
              { code: 'ENT 201', title: 'Entrepreneurship II', credits: 2, description: 'Business planning and healthcare venture creation.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'NSC 203', title: 'Medical-Surgical Nursing II', credits: 4, description: 'Care of patients with cardiovascular, respiratory, GI, and renal disorders.' },
              { code: 'PHA 202', title: 'Pharmacology II', credits: 3, description: 'Antibiotics, antimalarials, cardiovascular drugs, and drug interactions.' },
              { code: 'NSC 204', title: 'Community Health Nursing II', credits: 3, description: 'Immunization, maternal-child health, school health, and environmental health.' },
              { code: 'NSC 205', title: 'Introduction to Research', credits: 2, description: 'Research methods, evidence-based practice, and data analysis basics.' },
              { code: 'PHS 201', title: 'Pathophysiology', credits: 2, description: 'Mechanisms of disease and altered physiological states.' },
              { code: 'MGT 201', title: 'Healthcare Management', credits: 2, description: 'Health systems, healthcare delivery models, and resource management.' },
            ],
          },
        ],
        keyTopics: ['Medical-surgical nursing', 'Pharmacology & drug calculations', 'Community health', 'Wound care & dressings', 'Fluid & electrolyte balance', 'Immunization schedule'],
        clinicalRotation: ['Medical wards', 'Surgical wards', 'Community health center', 'Outpatient department'],
        skillsToMaster: ['Wound dressing techniques', 'IV cannulation & care', 'Drug administration (oral, IM, IV)', 'NG tube insertion', 'Catheterization', 'Immunization administration'],
        nmcnRelevance: 'Medical-Surgical Nursing is heavily tested in NMCN exams. Master cardiovascular, respiratory, and GI system care.',
        studyHoursTarget: 180,
      },
      '3': {
        title: 'Third Year - Specialised Nursing Areas',
        description: 'Pediatric, mental health, community health deepening, and introduction to research.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'NSC 301', title: 'Pediatric Nursing', credits: 4, description: 'Growth & development, childhood illnesses, neonatal care, and pediatric emergencies.' },
              { code: 'NSC 302', title: 'Mental Health Nursing', credits: 3, description: 'Therapeutic communication, psychiatric disorders, and mental health interventions.' },
              { code: 'NSC 303', title: 'Community Health Nursing III', credits: 3, description: 'Rural health, nomadic health, occupational health, and disaster nursing.' },
              { code: 'NSC 304', title: 'Research Methodology', credits: 2, description: 'Research design, sampling, ethical considerations, and proposal writing.' },
              { code: 'NSC 305', title: 'Nursing Education', credits: 2, description: 'Teaching methods, curriculum development, and patient education strategies.' },
              { code: 'PHA 301', title: 'Pharmacology III', credits: 2, description: 'Psychiatric drugs, pediatric drugs, antiretrovirals, and anti-TB drugs.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'NSC 306', title: 'Pediatric Nursing II', credits: 3, description: 'Infectious childhood diseases, malnutrition, immunization, and child advocacy.' },
              { code: 'NSC 307', title: 'Mental Health Nursing II', credits: 3, description: 'Substance abuse, forensic psychiatry, community mental health, and rehabilitation.' },
              { code: 'NSC 308', title: 'Ophthalmic Nursing', credits: 2, description: 'Eye assessment, common eye conditions, and ophthalmic procedures.' },
              { code: 'NSC 309', title: 'Ear, Nose & Throat Nursing', credits: 2, description: 'ENT assessment, common disorders, and nursing management.' },
              { code: 'NSC 310', title: 'Accident & Emergency Nursing', credits: 3, description: 'Triage, trauma care, emergency management, and disaster response.' },
              { code: 'NSC 311', title: 'Research Project (Preliminary)', credits: 2, description: 'Research proposal development and literature review.' },
            ],
          },
        ],
        keyTopics: ['Pediatric nursing', 'Mental health nursing', 'Emergency/triage nursing', 'Ophthalmic & ENT nursing', 'Community health outreach', 'Research proposal writing'],
        clinicalRotation: ['Pediatric ward', 'Psychiatric unit', 'Emergency department', 'Eye/ENT clinic', 'Community outreach'],
        skillsToMaster: ['Pediatric assessment & resuscitation', 'Mental health assessment & de-escalation', 'Triage in emergency settings', 'Eye examination & irrigation', 'Psychiatric first aid'],
        nmcnRelevance: 'Pediatric nursing, mental health, and emergency care are key NMCN exam domains. Practice past NMCN questions in these areas.',
        studyHoursTarget: 200,
      },
      '4': {
        title: 'Fourth Year - Leadership & Comprehensive Practice',
        description: 'Advanced nursing leadership, critical care, public health, research completion, and clinical internship.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'NSC 401', title: 'Critical Care Nursing', credits: 3, description: 'ICU care, hemodynamic monitoring, ventilators, and advanced life support.' },
              { code: 'NSC 402', title: 'Nursing Leadership & Management', credits: 3, description: 'Nursing administration, resource management, quality improvement, and policy.' },
              { code: 'NSC 403', title: 'Public Health Nursing', credits: 3, description: 'Public health policy, disease surveillance, health promotion, and epidemiology.' },
              { code: 'NSC 404', title: 'Nursing Ethics & Jurisprudence', credits: 2, description: 'Legal aspects of nursing, ethics, patient rights, and professional regulation.' },
              { code: 'NSC 405', title: 'Research Project (Defense)', credits: 4, description: 'Research completion, data analysis, report writing, and oral defense.' },
              { code: 'NSC 406', title: 'Reproductive Health Nursing', credits: 2, description: 'Family planning, STI management, adolescent reproductive health.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'NSC 407', title: 'Clinical Internship', credits: 6, description: 'Supervised clinical practice across all major departments.' },
              { code: 'NSC 408', title: 'Community Health Practicum', credits: 4, description: 'Field experience in rural/urban community health settings.' },
              { code: 'NSC 409', title: 'Comprehensive Nursing Review', credits: 3, description: 'NMCN exam preparation, integrated case studies, and revision.' },
              { code: 'GST 401', title: 'Peace & Conflict Resolution', credits: 2, description: 'Conflict resolution and peacebuilding in healthcare settings.' },
            ],
          },
        ],
        keyTopics: ['Critical care nursing', 'Leadership & management', 'Public health', 'Nursing ethics & law', 'Research defense', 'NMCN exam preparation'],
        clinicalRotation: ['ICCU/Critical care unit', 'Administrative placement', 'Comprehensive internship', 'Community posting'],
        skillsToMaster: ['Advanced life support (ALS)', 'Ventilator management', 'Nursing care planning', 'Team leadership', 'Incident reporting', 'NMCN exam technique'],
        nmcnRelevance: 'Final year is critical for NMCN exam preparation. Focus on integrated case studies, past NMCN questions, and clinical simulation.',
        studyHoursTarget: 250,
      },
    },
  },
  'Diploma Nursing Student': {
    label: 'Diploma in Nursing / RN (3-Year Programme)',
    years: {
      '1': {
        title: 'First Year - Foundation Sciences',
        description: 'Basic medical sciences and introduction to nursing practice.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'DNS 101', title: 'Anatomy & Physiology I', credits: 3, description: 'Foundation of body structure and function.' },
              { code: 'DNS 102', title: 'Fundamentals of Nursing I', credits: 3, description: 'Basic nursing principles, ethics, and practice.' },
              { code: 'DNS 103', title: 'Microbiology', credits: 2, description: 'Infection control, pathogens, and immunology.' },
              { code: 'DNS 104', title: 'Psychology', credits: 2, description: 'Human behavior, learning, and mental processes.' },
              { code: 'DNS 105', title: 'Community Health I', credits: 2, description: 'Primary health care and community assessment.' },
              { code: 'GNS 101', title: 'English & Communication', credits: 2, description: 'Professional communication and report writing.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'DNS 106', title: 'Anatomy & Physiology II', credits: 3, description: 'Systems physiology and advanced anatomy.' },
              { code: 'DNS 107', title: 'Fundamentals of Nursing II', credits: 3, description: 'Vital signs, hygiene, mobility, and safety.' },
              { code: 'DNS 108', title: 'Pharmacology I', credits: 2, description: 'Drug administration and calculations.' },
              { code: 'DNS 109', title: 'Nutrition & Dietetics', credits: 2, description: 'Therapeutic nutrition and dietary planning.' },
              { code: 'DNS 110', title: 'Sociology', credits: 2, description: 'Social structures and health determinants.' },
              { code: 'GNS 102', title: 'Computer Studies', credits: 2, description: 'Information technology in healthcare.' },
            ],
          },
        ],
        keyTopics: ['Anatomy & Physiology', 'Nursing fundamentals', 'Pharmacology basics', 'Community health', 'Infection control'],
        clinicalRotation: ['Clinical skills lab', 'Observation in general wards'],
        skillsToMaster: ['Vital signs', 'Hand hygiene', 'Bed making', 'Patient positioning', 'Sterile techniques'],
        nmcnRelevance: 'Foundations for RN exam. Focus on A&P and basic nursing procedures.',
        studyHoursTarget: 100,
      },
      '2': {
        title: 'Second Year - Core Nursing Practice',
        description: 'Medical-surgical nursing, maternal-child health, and expanded clinical practice.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'DNS 201', title: 'Medical-Surgical Nursing I', credits: 4, description: 'Perioperative care, wound management, and common medical conditions.' },
              { code: 'DNS 202', title: 'Pharmacology II', credits: 2, description: 'Therapeutic drug classifications and nursing implications.' },
              { code: 'DNS 203', title: 'Community Health II', credits: 2, description: 'Immunization, family health, and school health.' },
              { code: 'DNS 204', title: 'Pediatric Nursing I', credits: 3, description: 'Child growth, development, and common pediatric conditions.' },
              { code: 'DNS 205', title: 'Nutrition II', credits: 2, description: 'Clinical nutrition and therapeutic diets.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'DNS 206', title: 'Medical-Surgical Nursing II', credits: 4, description: 'Cardiovascular, respiratory, GI, and renal nursing.' },
              { code: 'DNS 207', title: 'Pediatric Nursing II', credits: 3, description: 'Neonatal care, childhood infections, and pediatric emergencies.' },
              { code: 'DNS 208', title: 'Maternal & Child Health', credits: 3, description: 'Antenatal, intrapartum, postnatal care, and family planning.' },
              { code: 'DNS 209', title: 'Introduction to Research', credits: 2, description: 'Research methods and evidence-based practice.' },
              { code: 'DNS 210', title: 'Health Education', credits: 2, description: 'Patient education strategies and health promotion.' },
            ],
          },
        ],
        keyTopics: ['Medical-surgical nursing', 'Pediatric nursing', 'Maternal-child health', 'Immunization', 'Family planning'],
        clinicalRotation: ['Medical & surgical wards', 'Pediatric ward', 'Maternity unit', 'Immunization clinic'],
        skillsToMaster: ['Wound dressing', 'IV therapy', 'Drug administration', 'Pediatric assessment', 'Family planning counseling'],
        nmcnRelevance: 'Core RN exam content. Medical-surgical and maternal-child health are major NMCN domains.',
        studyHoursTarget: 160,
      },
      '3': {
        title: 'Third Year - Comprehensive & Specialized Nursing',
        description: 'Advanced nursing, leadership, mental health, and comprehensive nursing practice.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'DNS 301', title: 'Medical-Surgical Nursing III', credits: 3, description: 'Advanced medical-surgical conditions and critical care.' },
              { code: 'DNS 302', title: 'Mental Health Nursing', credits: 3, description: 'Psychiatric disorders, therapeutic communication, and mental health law.' },
              { code: 'DNS 303', title: 'Community Health III', credits: 2, description: 'Rural health, occupational health, and disaster nursing.' },
              { code: 'DNS 304', title: 'Accident & Emergency Nursing', credits: 2, description: 'Triage, trauma, and emergency care.' },
              { code: 'DNS 305', title: 'Research Project', credits: 2, description: 'Research conduct and report writing.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'DNS 306', title: 'Leadership & Management', credits: 2, description: 'Nursing administration and team management.' },
              { code: 'DNS 307', title: 'Nursing Ethics & Law', credits: 2, description: 'Professional regulation, ethics, and legal aspects.' },
              { code: 'DNS 308', title: 'Comprehensive Clinical Internship', credits: 6, description: 'Supervised clinical practice across all departments.' },
              { code: 'DNS 309', title: 'NMCN Exam Preparation', credits: 3, description: 'Integrated revision, mock exams, and exam strategies.' },
            ],
          },
        ],
        keyTopics: ['Mental health nursing', 'Emergency nursing', 'Leadership', 'Nursing ethics', 'Comprehensive review'],
        clinicalRotation: ['Psychiatric unit', 'Emergency department', 'Community posting', 'All departments (internship)'],
        skillsToMaster: ['Mental health assessment', 'Triage', 'Leadership & delegation', 'Crisis intervention', 'NMCN exam technique'],
        nmcnRelevance: 'Final preparation for RN licensing exam. Comprehensive review and mock exams.',
        studyHoursTarget: 220,
      },
    },
  },
  'Midwifery Student': {
    label: 'Midwifery (Direct Entry / Post-Basic)',
    years: {
      '1': {
        title: 'First Year - Foundation & Normal Midwifery',
        description: 'Reproductive anatomy, antenatal care, normal labor, and family planning.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'MDW 101', title: 'Reproductive Anatomy & Physiology', credits: 3, description: 'Male and female reproductive systems, endocrinology, and fertilization.' },
              { code: 'MDW 102', title: 'Antenatal Care', credits: 3, description: 'Booking visit, antenatal assessment, risk screening, and health education.' },
              { code: 'MDW 103', title: 'Pharmacology for Midwives', credits: 2, description: 'Drugs in pregnancy, oxytocics, and analgesics in labor.' },
              { code: 'MDW 104', title: 'Family Planning', credits: 2, description: 'Contraceptive methods, counseling, and service delivery.' },
              { code: 'MDW 105', title: 'Nutrition in Pregnancy', credits: 2, description: 'Maternal nutrition, supplementation, and dietary counseling.' },
              { code: 'GMD 101', title: 'Communication & Counseling', credits: 2, description: 'Counseling skills and health communication.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'MDW 106', title: 'Normal Labor & Delivery', credits: 4, description: 'Mechanism of labor, partograph use, delivery techniques, and perineal care.' },
              { code: 'MDW 107', title: 'Postnatal Care', credits: 3, description: 'Maternal and neonatal postnatal assessment and care.' },
              { code: 'MDW 108', title: 'Neonatal Care I', credits: 3, description: 'Newborn assessment, resuscitation, thermoregulation, and breastfeeding.' },
              { code: 'MDW 109', title: 'Community Midwifery I', credits: 2, description: 'Community-based maternity care and outreach services.' },
              { code: 'MDW 110', title: 'Microbiology & Infection Control', credits: 2, description: 'Infection prevention in midwifery practice.' },
            ],
          },
        ],
        keyTopics: ['Reproductive anatomy', 'Antenatal care', 'Normal labor', 'Postnatal care', 'Family planning', 'Neonatal resuscitation'],
        clinicalRotation: ['Antenatal clinic', 'Labor ward (observation)', 'Postnatal ward', 'Family planning unit'],
        skillsToMaster: ['Abdominal palpation (Leopold maneuvers)', 'Partograph plotting', 'APGAR scoring', 'Breastfeeding support', 'Perineal care'],
        nmcnRelevance: 'Midwifery exam focuses heavily on normal pregnancy, labor, and neonatal care.',
        studyHoursTarget: 140,
      },
      '2': {
        title: 'Second Year - Complicated Midwifery & Gynecology',
        description: 'High-risk pregnancy, complicated labor, gynecological conditions, and neonatal complications.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'MDW 201', title: 'Complicated Pregnancy', credits: 3, description: 'Pre-eclampsia, eclampsia, APH, multiple pregnancy, and medical disorders.' },
              { code: 'MDW 202', title: 'Complicated Labor & Delivery', credits: 4, description: 'Obstructed labor, PPH, cord prolapse, and operative deliveries.' },
              { code: 'MDW 203', title: 'Neonatal Care II', credits: 3, description: 'Preterm care, neonatal infections, jaundice, and congenital anomalies.' },
              { code: 'MDW 204', title: 'Gynecology I', credits: 2, description: 'Gynecological assessment, menstrual disorders, and infections.' },
              { code: 'MDW 205', title: 'Research Methods', credits: 2, description: 'Midwifery research and evidence-based practice.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'MDW 206', title: 'Complicated Postnatal Care', credits: 3, description: 'Postpartum complications, sepsis, thromboembolism, and psychological disorders.' },
              { code: 'MDW 207', title: 'Gynecology II', credits: 2, description: 'Fibroids, endometriosis, prolapse, and gynecological surgeries.' },
              { code: 'MDW 208', title: 'Community Midwifery II', credits: 2, description: 'Home births, traditional birth attendant collaboration, and referrals.' },
              { code: 'MDW 209', title: 'Leadership in Midwifery', credits: 2, description: 'Midwifery management, policy, and advocacy.' },
              { code: 'MDW 210', title: 'Adolescent & Reproductive Health', credits: 2, description: 'Teenage pregnancy, STIs, and reproductive rights.' },
            ],
          },
        ],
        keyTopics: ['High-risk pregnancy', 'Complicated labor', 'Obstetric emergencies', 'Gynecology', 'Neonatal complications'],
        clinicalRotation: ['Labor ward (active)', 'Antenatal high-risk clinic', 'Gynecology ward', 'SCBU/NICU', 'Community rotation'],
        skillsToMaster: ['Obstetric emergency management', 'Manual removal of placenta', 'Episiotomy & repair', 'Vacuum delivery assistance', 'Neonatal resuscitation (advanced)'],
        nmcnRelevance: 'Obstetric emergencies and high-risk conditions are heavily tested in midwifery licensing exams.',
        studyHoursTarget: 190,
      },
      '3': {
        title: 'Third Year - Advanced Practice & Clinical Internship',
        description: 'Advanced midwifery practice, leadership, research, and comprehensive clinical internship.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'MDW 301', title: 'Advanced Midwifery Practice', credits: 3, description: 'Evidence-based midwifery, advanced skills, and clinical decision-making.' },
              { code: 'MDW 302', title: 'Midwifery Education', credits: 2, description: 'Teaching methods, mentorship, and clinical instruction.' },
              { code: 'MDW 303', title: 'Research Project', credits: 3, description: 'Midwifery research completion and report.' },
              { code: 'MDW 304', title: 'Legal & Ethical Issues', credits: 2, description: 'Midwifery regulation, ethics, and professional accountability.' },
              { code: 'MDW 305', title: 'Reproductive Health Policy', credits: 2, description: 'National reproductive health policies and programmes.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'MDW 306', title: 'Clinical Internship', credits: 6, description: 'Comprehensive supervised midwifery practice.' },
              { code: 'MDW 307', title: 'Community Midwifery Practicum', credits: 4, description: 'Independent community midwifery practice under supervision.' },
              { code: 'MDW 308', title: 'Licensing Exam Preparation', credits: 3, description: 'Integrated revision, mock exams, and clinical simulations.' },
            ],
          },
        ],
        keyTopics: ['Advanced midwifery', 'Clinical leadership', 'Research dissemination', 'Professional regulation'],
        clinicalRotation: ['All maternity units', 'Independent community placement', 'Leadership rotation'],
        skillsToMaster: ['Independent midwifery practice', 'Clinical teaching', 'Quality improvement', 'Emergency obstetric care'],
        nmcnRelevance: 'Final preparation for RM licensing exam. Comprehensive review and supervised practice.',
        studyHoursTarget: 240,
      },
    },
  },
  'Community Nursing Student': {
    label: 'Community Nursing / CHEW (3-Year Programme)',
    years: {
      '1': {
        title: 'First Year - Community Health Foundation',
        description: 'Basic health sciences, community health principles, and environmental health.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'CHN 101', title: 'Anatomy & Physiology', credits: 3, description: 'Basic human body structure and functions.' },
              { code: 'CHN 102', title: 'Community Health I', credits: 3, description: 'Concepts of community health, PHC, and health indicators.' },
              { code: 'CHN 103', title: 'Environmental Health', credits: 2, description: 'Water, sanitation, waste disposal, and environmental hygiene.' },
              { code: 'CHN 104', title: 'Health Promotion & Education', credits: 2, description: 'Health behavior, communication, and teaching methods.' },
              { code: 'CHN 105', title: 'Microbiology', credits: 2, description: 'Disease-causing organisms and infection control.' },
              { code: 'GCH 101', title: 'English & Communication', credits: 2, description: 'Professional communication skills.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'CHN 106', title: 'Pharmacology Basics', credits: 2, description: 'Essential drugs, administration, and storage.' },
              { code: 'CHN 107', title: 'Community Health II', credits: 3, description: 'Family health, school health, and occupational health.' },
              { code: 'CHN 108', title: 'Nutrition', credits: 2, description: 'Basic nutrition, malnutrition, and community nutrition.' },
              { code: 'CHN 109', title: 'First Aid & Emergency Care', credits: 2, description: 'Basic first aid, transport, and emergency response.' },
              { code: 'CHN 110', title: 'Sociology & Psychology', credits: 2, description: 'Social and behavioral factors in health.' },
            ],
          },
        ],
        keyTopics: ['Community health concepts', 'Environmental health', 'Health education', 'First aid', 'PHC'],
        clinicalRotation: ['Community health center', 'Environmental health field visit'],
        skillsToMaster: ['Health talk delivery', 'Water quality testing', 'Home visiting', 'Basic first aid'],
        nmcnRelevance: 'Foundation for CHEW certification exam.',
        studyHoursTarget: 90,
      },
      '2': {
        title: 'Second Year - Maternal-Child & Disease Control',
        description: 'Maternal and child health, communicable disease control, and community interventions.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'CHN 201', title: 'Maternal & Child Health I', credits: 3, description: 'Antenatal, postnatal care, and child health services.' },
              { code: 'CHN 202', title: 'Communicable Disease Control', credits: 3, description: 'Disease surveillance, outbreak investigation, and immunization.' },
              { code: 'CHN 203', title: 'Community Nutrition', credits: 2, description: 'Nutritional assessment, supplements, and food security.' },
              { code: 'CHN 204', title: 'Reproductive Health', credits: 2, description: 'Family planning, STI management, and adolescent health.' },
              { code: 'CHN 205', title: 'Health Records & Data', credits: 2, description: 'Health information systems and data management.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'CHN 206', title: 'Maternal & Child Health II', credits: 3, description: 'High-risk pregnancies, neonatal care, and child survival strategies.' },
              { code: 'CHN 207', title: 'Non-Communicable Diseases', credits: 2, description: 'Hypertension, diabetes, cancer screening in communities.' },
              { code: 'CHN 208', title: 'Mental Health in Communities', credits: 2, description: 'Common mental disorders, substance abuse, and community support.' },
              { code: 'CHN 209', title: 'Environmental Health II', credits: 2, description: 'Food safety, pollution control, and occupational hazards.' },
              { code: 'CHN 210', title: 'Primary Health Care Management', credits: 2, description: 'PHC center management, supplies, and supervision.' },
            ],
          },
        ],
        keyTopics: ['Maternal-child health', 'Immunization', 'Disease surveillance', 'Family planning', 'PHC management'],
        clinicalRotation: ['MCH/FP clinic', 'Immunization post', 'Health center management'],
        skillsToMaster: ['Growth monitoring', 'Immunization administration', 'Family planning counseling', 'Disease notification'],
        nmcnRelevance: 'Core CHEW exam content. Focus on MCH and disease control.',
        studyHoursTarget: 140,
      },
      '3': {
        title: 'Third Year - Advanced Community Practice & Internship',
        description: 'Community health management, research, and comprehensive field practice.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'CHN 301', title: 'Community Health Management', credits: 3, description: 'Health center management, supervision, and quality improvement.' },
              { code: 'CHN 302', title: 'Research in Community Health', credits: 2, description: 'Community health research and needs assessment.' },
              { code: 'CHN 303', title: 'Health Policy & Advocacy', credits: 2, description: 'Health policy, advocacy, and community mobilization.' },
              { code: 'CHN 304', title: 'Disaster & Emergency Management', credits: 2, description: 'Disaster preparedness, response, and community resilience.' },
              { code: 'CHN 305', title: 'Ethics & Professional Practice', credits: 2, description: 'Community health ethics and professional conduct.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'CHN 306', title: 'Community Health Practicum', credits: 6, description: 'Supervised field practice in community settings.' },
              { code: 'CHN 307', title: 'Certification Exam Preparation', credits: 3, description: 'Comprehensive revision and mock exams.' },
            ],
          },
        ],
        keyTopics: ['Community health management', 'Disaster preparedness', 'Policy & advocacy', 'Field practice'],
        clinicalRotation: ['Health center management', 'Rural community posting', 'NGO/Public health placement'],
        skillsToMaster: ['Health center management', 'Community mobilization', 'Supervision & training', 'Report writing'],
        nmcnRelevance: 'Final preparation for CHEW certification. Supervised practice is essential.',
        studyHoursTarget: 180,
      },
    },
  },
  'Post-Basic Student': {
    label: 'Post-Basic Nursing Programme',
    years: {
      '1': {
        title: 'Post-Basic Programme (18-24 Months)',
        description: 'Advanced specialty training. Content varies by specialty (Psychiatric, Ophthalmic, ENT, etc.).',
        semesters: [
          {
            name: 'Core Modules',
            courses: [
              { code: 'PBN 101', title: 'Advanced Nursing Science', credits: 3, description: 'Advanced pathophysiology, pharmacology, and nursing theory.' },
              { code: 'PBN 102', title: 'Specialty Nursing I', credits: 4, description: 'Core specialty theory and practice (varies by programme).' },
              { code: 'PBN 103', title: 'Research & Evidence-Based Practice', credits: 3, description: 'Advanced research methods and critical appraisal.' },
              { code: 'PBN 104', title: 'Leadership & Management', credits: 3, description: 'Advanced nursing leadership, policy, and administration.' },
              { code: 'PBN 105', title: 'Teaching & Mentorship', credits: 2, description: 'Clinical teaching, mentorship, and preceptorship.' },
            ],
          },
          {
            name: 'Clinical Modules',
            courses: [
              { code: 'PBN 201', title: 'Specialty Nursing II', credits: 4, description: 'Advanced specialty clinical practice.' },
              { code: 'PBN 202', title: 'Clinical Practicum', credits: 6, description: 'Supervised clinical placement in specialty area.' },
              { code: 'PBN 203', title: 'Quality Improvement Project', credits: 3, description: 'QI project in specialty setting.' },
              { code: 'PBN 204', title: 'Specialty Certification Prep', credits: 2, description: 'Preparation for specialty certification exam.' },
            ],
          },
        ],
        keyTopics: ['Advanced specialty nursing', 'Evidence-based practice', 'Clinical leadership', 'Quality improvement'],
        clinicalRotation: ['Specialty unit', 'Teaching placement', 'Leadership rotation'],
        skillsToMaster: ['Advanced clinical assessment', 'Clinical teaching', 'Quality improvement methodology', 'Specialty procedures'],
        nmcnRelevance: 'Post-basic graduates take specialty certification exams. Focus on advanced specialty competencies.',
        studyHoursTarget: 200,
      },
    },
  },
};

import User from '../models/User.js';

export async function getAP(req, res) {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const programme = curriculumData[user.role];
    if (!programme) {
      return res.status(400).json({ success: false, message: 'No academic planner data for your programme. Please update your profile.' });
    }

    const yearData = programme.years[user.year];
    if (!yearData) {
      return res.status(400).json({ success: false, message: 'No academic planner data for your year. Please update your profile.' });
    }

    const totalCourses = yearData.semesters.reduce((sum, s) => sum + s.courses.length, 0);
    const totalCredits = yearData.semesters.reduce((sum, s) => sum + s.courses.reduce((cs, c) => cs + (c.credits || 0), 0), 0);

    res.json({
      success: true,
      data: {
        programme: programme.label,
        role: user.role,
        year: user.year,
        ...yearData,
        totalCourses,
        totalCredits,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching academic planner', error: error.message });
  }
}

export function getProgrammes(req, res) {
  const programmes = Object.entries(curriculumData).map(([key, val]) => ({
    value: key,
    label: val.label,
    maxYear: Math.max(...Object.keys(val.years).map(Number)),
  }));
  res.json({ success: true, data: programmes });
}
