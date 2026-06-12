const curriculumData = {
  'BNSc Student': {
    label: 'BNSc Nursing (4-Year Degree Programme)',
    overview: 'Bachelor of Nursing Science degree offered at Nigerian universities (UNIBEN, UNILAG, OAU, UNN, UI, etc.). Prepares students for RN licensing and leadership roles. Curriculum follows NMCN and NUC minimum standards.',
    years: {
      '1': {
        title: '100 Level - Basic Medical & Behavioural Sciences',
        description: 'Foundation in basic sciences, behavioural sciences, and introduction to professional nursing. Emphasis on normal structure and function of the human body.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'ANA 111', title: 'Human Anatomy I', credits: 3, description: 'Gross anatomy of the musculoskeletal system, histology of basic tissues, and embryology introduction.' },
              { code: 'PHS 111', title: 'Human Physiology I', credits: 3, description: 'Cell physiology, nerve and muscle physiology, blood and body fluids, cardiovascular physiology.' },
              { code: 'BCH 111', title: 'Medical Biochemistry I', credits: 2, description: 'Chemistry and metabolism of carbohydrates, proteins, lipids, enzymes, and nucleic acids.' },
              { code: 'NSC 111', title: 'Introduction to Professional Nursing', credits: 3, description: 'History of nursing in Nigeria, nursing theories (Nightingale, Henderson, Orem), roles of the nurse, ethical and legal foundations.' },
              { code: 'PSY 111', title: 'General Psychology', credits: 2, description: 'Human development across the lifespan, learning theories, motivation, emotion, perception, and personality.' },
              { code: 'SOC 111', title: 'Introduction to Sociology', credits: 2, description: 'Basic sociological concepts, social structure, culture, socialization, family, and health-illness continuum in Nigeria.' },
              { code: 'GST 111', title: 'Use of English & Communication Skills', credits: 2, description: 'Academic writing, reading comprehension, note-taking, public speaking, and professional documentation.' },
              { code: 'GST 112', title: 'Nigerian Peoples & Culture', credits: 2, description: 'Nigerian ethnic groups, cultural diversity, traditional health practices, and their impact on healthcare.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'ANA 112', title: 'Human Anatomy II', credits: 3, description: 'Anatomy of the nervous system, cardiovascular system, respiratory system, digestive system, and reproductive system.' },
              { code: 'PHS 112', title: 'Human Physiology II', credits: 3, description: 'Respiratory physiology, renal physiology, gastrointestinal physiology, endocrine physiology, and reproductive physiology.' },
              { code: 'BCH 112', title: 'Medical Biochemistry II', credits: 2, description: 'Vitamins, minerals, nutrition, hormonal regulation, acid-base balance, and inborn errors of metabolism.' },
              { code: 'MCB 111', title: 'General Microbiology & Parasitology', credits: 2, description: 'Bacteria, viruses, fungi, parasites of medical importance in Nigeria, infection cycle, and host defence mechanisms.' },
              { code: 'NSC 112', title: 'Fundamentals of Nursing Practice', credits: 3, description: 'Basic nursing skills: vital signs, personal hygiene, mobility and positioning, safety, infection prevention, and document recording.' },
              { code: 'NSC 113', title: 'Health Assessment I', credits: 2, description: 'Health history interviewing techniques, physical examination methods (inspection, palpation, percussion, auscultation), vital signs assessment.' },
              { code: 'GST 113', title: 'Introduction to Computer & Information Technology', credits: 2, description: 'Computer hardware, software, internet skills, electronic health records basics, and data management.' },
              { code: 'GST 114', title: 'Entrepreneurship & Innovation', credits: 2, description: 'Entrepreneurial mindset, business planning, healthcare venture creation, and innovation in nursing practice.' },
            ],
          },
        ],
        keyTopics: ['Human anatomy & physiology', 'Nursing fundamentals & theories', 'Infection prevention & control', 'Health assessment techniques', 'Normal body structure & function', 'Professional communication'],
        clinicalRotation: ['Pre-clinical skills laboratory practice', 'Observation posting in general hospital wards', 'Simulation lab for basic nursing procedures'],
        skillsToMaster: ['Hand washing and aseptic technique', 'Measurement of vital signs (T, P, R, BP)', 'Bed making (occupied and unoccupied)', 'Patient positioning and transfer', 'Sterile gloving and gowning', 'Medical records documentation', 'Admission and discharge procedures'],
        nmcnRelevance: 'Anatomy, Physiology, and Fundamentals of Nursing form the foundation of the NMCN licensing exam. Pay special attention to body systems and basic nursing procedures.',
        studyHoursTarget: 150,
      },
      '2': {
        title: '200 Level - Introduction to Clinical Sciences',
        description: 'Transition from basic sciences to clinical nursing. Introduction to medical-surgical nursing, pharmacology, community health, and research.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'NSC 211', title: 'Medical-Surgical Nursing I', credits: 4, description: 'Principles of medical-surgical nursing, perioperative nursing care, wound care and healing, fluid and electrolyte balance, pain assessment and management.' },
              { code: 'PHA 211', title: 'Pharmacology for Nurses I', credits: 3, description: 'General pharmacological principles, drug classifications and actions, pharmacokinetics and pharmacodynamics, dosage calculations, drug legislation in Nigeria.' },
              { code: 'NUT 211', title: 'Nutrition & Dietetics', credits: 2, description: 'Therapeutic diets for common conditions, nutritional assessment, malnutrition in Nigeria, enteral and parenteral nutrition.' },
              { code: 'NSC 212', title: 'Community Health Nursing I', credits: 3, description: 'Primary Health Care concept (Alma Ata), levels of healthcare in Nigeria, epidemiology basics, disease surveillance, and community diagnosis.' },
              { code: 'PAT 211', title: 'General Pathology', credits: 2, description: 'Cell injury and adaptation, inflammation and repair, neoplasia, haemodynamic disorders, and infection pathogenesis.' },
              { code: 'GST 211', title: 'Logic, Philosophy & Human Reasoning', credits: 2, description: 'Critical thinking, clinical reasoning, ethical decision-making, and logical analysis in healthcare.' },
              { code: 'NSC 213', title: 'Introduction to Nursing Research', credits: 2, description: 'Research purpose, types of research, research process overview, literature searching, and ethical considerations.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'NSC 214', title: 'Medical-Surgical Nursing II', credits: 4, description: 'Nursing management of patients with cardiovascular disorders (hypertension, heart failure, CAD), respiratory disorders (asthma, COPD, pneumonia), GI disorders (ulcers, hepatitis), and renal disorders (UTI, renal failure).' },
              { code: 'PHA 212', title: 'Pharmacology for Nurses II', credits: 3, description: 'Drugs affecting the cardiovascular system, respiratory system, GI system, central nervous system, antimicrobials, antimalarials, and vaccines.' },
              { code: 'NSC 215', title: 'Community Health Nursing II', credits: 3, description: 'Maternal and child health services, Expanded Programme on Immunization (EPI) in Nigeria, school health programme, occupational health, and environmental health.' },
              { code: 'NSC 216', title: 'Pathophysiology for Nurses', credits: 2, description: 'Altered physiological states in common diseases, mechanisms of disease progression, and clinical manifestations.' },
              { code: 'NSC 217', title: 'Introduction to Health Management', credits: 2, description: 'Healthcare system structure in Nigeria, health policy, resource management, and quality assurance basics.' },
              { code: 'NSC 218', title: 'Health Promotion & Education', credits: 2, description: 'Health behaviour theories, patient education strategies, health communication, and community mobilization techniques.' },
            ],
          },
        ],
        keyTopics: ['Medical-surgical nursing management', 'Pharmacology and drug calculations', 'Community health & PHC in Nigeria', 'Wound care and surgical nursing', 'Fluid, electrolyte & acid-base balance', 'Immunization schedule (Nigeria EPI)'],
        clinicalRotation: ['Medical wards', 'Surgical wards', 'Community health centre posting', 'Outpatient department', 'Immunization clinic'],
        skillsToMaster: ['Wound assessment and dressing technique', 'IV cannulation and IV fluid administration', 'Drug administration (oral, IM, SC, IV, sublingual)', 'Nasogastric tube insertion and feeding', 'Urinary catheterization (male and female)', 'Oxygen therapy administration', 'Immunization administration technique'],
        nmcnRelevance: 'Medical-Surgical Nursing and Pharmacology are the most heavily weighted domains in the NMCN exam. Study cardiovascular, respiratory, GI, and renal systems thoroughly.',
        studyHoursTarget: 220,
      },
      '3': {
        title: '300 Level - Specialty Nursing Areas',
        description: 'Specialised nursing areas: paediatric, mental health, ophthalmic, ENT, emergency nursing. Community health deepening and research project initiation.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'NSC 311', title: 'Paediatric Nursing I', credits: 4, description: 'Growth and development from infancy to adolescence, common childhood illnesses in Nigeria (malaria, pneumonia, diarrhoea, measles), neonatal care, and paediatric assessment.' },
              { code: 'NSC 312', title: 'Mental Health & Psychiatric Nursing I', credits: 3, description: 'Therapeutic communication, nurse-patient relationship, common psychiatric disorders (schizophrenia, depression, bipolar), psychopharmacology, and mental health legislation in Nigeria.' },
              { code: 'NSC 313', title: 'Community Health Nursing III', credits: 3, description: 'Rural health challenges in Nigeria, nomadic population health, disaster nursing, occupational health nursing, and rehabilitation nursing.' },
              { code: 'NSC 314', title: 'Research Methodology & Biostatistics', credits: 2, description: 'Research designs, sampling methods, data collection instruments, basic biostatistics, ethical approval process, and research proposal writing.' },
              { code: 'NSC 315', title: 'Principles of Nursing Education', credits: 2, description: 'Teaching and learning theories, curriculum development, lesson planning, clinical teaching methods, and student evaluation.' },
              { code: 'PHA 311', title: 'Pharmacology for Nurses III', credits: 2, description: 'Psychotropic drugs, paediatric pharmacology, antiretroviral therapy, anti-tuberculosis drugs, and drug interactions in special populations.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'NSC 316', title: 'Paediatric Nursing II', credits: 3, description: 'Infectious childhood diseases (polio, measles, tetanus, diphtheria, whooping cough), malnutrition management (kwashiorkor, marasmus), Expanded Programme on Immunization, and child health advocacy.' },
              { code: 'NSC 317', title: 'Mental Health & Psychiatric Nursing II', credits: 3, description: 'Substance abuse and addiction nursing, forensic psychiatry, community mental health services, psychosocial rehabilitation, and suicide prevention.' },
              { code: 'NSC 318', title: 'Ophthalmic Nursing', credits: 2, description: 'Eye assessment and vision testing, common eye conditions in Nigeria (cataract, glaucoma, trachoma, conjunctivitis), eye care procedures, and health education for visual health.' },
              { code: 'NSC 319', title: 'Ear, Nose & Throat (ENT) Nursing', credits: 2, description: 'ENT assessment, common ENT conditions (otitis media, sinusitis, tonsillitis, hearing loss), ENT procedures, and nursing care.' },
              { code: 'NSC 320', title: 'Accident & Emergency Nursing', credits: 3, description: 'Triage systems, emergency assessment, trauma nursing, cardiac life support (BLS/ACLS), poisoning management, burns management, and disaster response.' },
              { code: 'NSC 321', title: 'Nursing Research Project I', credits: 2, description: 'Research topic selection, literature review, research proposal development, and ethical approval application.' },
            ],
          },
        ],
        keyTopics: ['Paediatric nursing care', 'Mental health & psychiatric nursing', 'Emergency triage and trauma care', 'Ophthalmic & ENT nursing', 'Substance abuse nursing', 'Research proposal writing'],
        clinicalRotation: ['Paediatric ward (children\'s emergency, nursery/SCBU)', 'Psychiatric unit', 'Accident & Emergency department', 'Eye and ENT clinics', 'Community health outreach'],
        skillsToMaster: ['Paediatric assessment and resuscitation (ETAT)', 'Mental status examination (MSE)', 'Triage in emergency settings', 'Basic and advanced life support (BLS/ACLS)', 'Eye examination and irrigation techniques', 'Restraint and de-escalation techniques', 'Paediatric drug dosage calculations'],
        nmcnRelevance: 'Paediatric Nursing, Mental Health, and Emergency Nursing are major NMCN exam domains. Expect case-study-based questions. Practice past NMCN questions extensively.',
        studyHoursTarget: 250,
      },
      '4': {
        title: '400 Level - Leadership, Research & Comprehensive Practice',
        description: 'Advanced nursing practice, leadership, critical care, public health, research completion, and full clinical internship preparing for NMCN licensing.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'NSC 411', title: 'Critical Care Nursing', credits: 3, description: 'ICU nursing, haemodynamic monitoring, mechanical ventilation, advanced cardiac life support, sepsis management, and multiple organ dysfunction syndrome.' },
              { code: 'NSC 412', title: 'Nursing Leadership & Administration', credits: 3, description: 'Nursing management theories, healthcare financing, nursing service administration, staff scheduling, conflict resolution, and quality assurance.' },
              { code: 'NSC 413', title: 'Public Health Nursing', credits: 3, description: 'Public health policies in Nigeria, disease surveillance and notification, epidemic investigation, health programme planning and evaluation.' },
              { code: 'NSC 414', title: 'Nursing Ethics & Jurisprudence', credits: 2, description: 'NMCN code of ethics, legal aspects of nursing practice in Nigeria, patient rights, informed consent, negligence, and professional discipline.' },
              { code: 'NSC 415', title: 'Nursing Research Project II', credits: 4, description: 'Data collection, statistical analysis, research report writing, discussion of findings, recommendations, and oral defence.' },
              { code: 'NSC 416', title: 'Reproductive & Family Health Nursing', credits: 2, description: 'Family planning methods, STI/HIV management, adolescent reproductive health, gender-based violence, and reproductive health rights.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'NSC 417', title: 'Clinical Internship (All Departments)', credits: 6, description: 'Supervised clinical practice rotating through medical, surgical, paediatric, obstetrics/gynaecology, psychiatric, A&E, and community departments.' },
              { code: 'NSC 418', title: 'Community Health Nursing Practicum', credits: 4, description: 'Comprehensive community health field experience: home visits, school health, occupational health, community diagnosis, and outreach services.' },
              { code: 'NSC 419', title: 'Comprehensive Nursing Review', credits: 3, description: 'Integrated revision of all nursing subjects, NMCN exam preparation, mock examinations, case study analysis, and exam-taking strategies.' },
              { code: 'GST 411', title: 'Peace, Conflict Resolution & Human Rights', credits: 2, description: 'Conflict resolution theories, human rights in healthcare, patient advocacy, and peacebuilding in multicultural healthcare settings.' },
            ],
          },
        ],
        keyTopics: ['Critical care and ICU nursing', 'Nursing leadership & administration', 'Public health & disease surveillance', 'Nursing ethics and legal accountability', 'Research defence and dissemination', 'NMCN exam preparation strategy'],
        clinicalRotation: ['Intensive Care Unit (ICU)/CCU', 'Nursing administration office', 'Comprehensive clinical internship (all wards)', 'Community health centre independent practice', 'NMCN exam clinical simulation'],
        skillsToMaster: ['Advanced Life Support (ALS) and resuscitation team leadership', 'Ventilator care and monitoring', 'Nursing care planning and critical pathways', 'Incident reporting and root cause analysis', 'Health programme planning and evaluation', 'Supervision and delegation of nursing tasks', 'NMCN objective and case-study exam technique'],
        nmcnRelevance: 'Final year is the most critical for NMCN exam success. Comprehensive review course covers all exam domains. Practice integrated case studies, past NMCN questions, and clinical simulations. The licensing exam includes 250-300 objective questions covering Medical-Surgical Nursing, Paediatrics, Mental Health, Community Health, Pharmacology, and Obstetrics.',
        studyHoursTarget: 300,
      },
    },
  },
  'Diploma Nursing Student': {
    label: 'Diploma in Nursing / Registered Nurse (RN) (3-Year Programme)',
    overview: 'Basic nursing programme offered at Schools of Nursing affiliated with teaching hospitals (UCH Ibadan, LUTH, ABUTH, etc.). Follows NMCN basic nursing curriculum. Graduates qualify to write the RN licensing exam.',
    years: {
      '1': {
        title: 'First Year - Basic Sciences & Nursing Foundations',
        description: 'Foundation in anatomy, physiology, microbiology, and introduction to professional nursing practice.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'NSG 101', title: 'Anatomy & Physiology I', credits: 3, description: 'Structure and functions of cells, tissues, musculoskeletal system, nervous system, and special senses.' },
              { code: 'NSG 102', title: 'Fundamentals of Nursing I', credits: 3, description: 'History of nursing, roles of the nurse, ethical principles, hospital admission/discharge procedures, and basic patient care.' },
              { code: 'NSG 103', title: 'Microbiology & Parasitology', credits: 2, description: 'Medically important microorganisms, infection cycle, sterilisation and disinfection, and basic immunology.' },
              { code: 'NSG 104', title: 'Psychology for Nurses', credits: 2, description: 'Human development stages, learning theories, attention and perception, memory, motivation, and mental health basics.' },
              { code: 'NSG 105', title: 'Introduction to Community Health', credits: 2, description: 'Definition of health, community health concepts, Primary Health Care (PHC) elements, and health indicators.' },
              { code: 'GNS 101', title: 'English & Professional Communication', credits: 2, description: 'Oral and written communication, report writing, patient interviewing, and documentation skills.' },
              { code: 'GNS 102', title: 'Sociology for Nurses', credits: 2, description: 'Social structures, culture, family dynamics, social determinants of health, and community social organisation.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'NSG 106', title: 'Anatomy & Physiology II', credits: 3, description: 'Cardiovascular system, respiratory system, digestive system, urinary system, endocrine system, and reproductive system.' },
              { code: 'NSG 107', title: 'Fundamentals of Nursing II', credits: 3, description: 'Vital signs measurement and interpretation, hygiene care, mobility and positioning, rest and sleep, safety measures, and documentation.' },
              { code: 'NSG 108', title: 'Pharmacology for Nurses I', credits: 2, description: 'General principles of drug administration, routes of administration, dosage calculations, legal aspects of drug control in Nigeria.' },
              { code: 'NSG 109', title: 'Nutrition & Dietetics', credits: 2, description: 'Basic nutrients, balanced diet, therapeutic diets, malnutrition in Nigeria, and dietary counseling.' },
              { code: 'NSG 110', title: 'Community Health Practice I', credits: 2, description: 'Family health services, school health programme, environmental health (water, sanitation, waste disposal), and home visiting.' },
              { code: 'GNS 103', title: 'Computer & Information Technology', credits: 2, description: 'Basic computer skills, health information systems, electronic documentation, and data management.' },
            ],
          },
        ],
        keyTopics: ['Human anatomy and physiology', 'Fundamentals of nursing', 'Pharmacology and drug calculations', 'Microbiology and infection control', 'Community health and PHC', 'Therapeutic nutrition'],
        clinicalRotation: ['Nursing skills laboratory', 'General ward observation', 'Community health centre observation'],
        skillsToMaster: ['Vital signs measurement (temperature, pulse, respiration, BP)', 'Hand washing/hand hygiene technique', 'Bed making (occupied, unoccupied, post-operative)', 'Patient positioning for comfort and procedures', 'Aseptic technique and sterile gloving', 'Admission and discharge procedures', 'Documentation and charting'],
        nmcnRelevance: 'Anatomy & Physiology and Fundamentals of Nursing are core NMCN exam subjects. Study body systems and basic nursing procedures thoroughly. The RN exam contains objective questions on these foundation subjects.',
        studyHoursTarget: 130,
      },
      '2': {
        title: 'Second Year - Clinical Nursing Practice',
        description: 'Introduction to medical-surgical nursing, paediatric nursing, maternal care, and expanded community health practice.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'NSG 201', title: 'Medical-Surgical Nursing I', credits: 4, description: 'Perioperative nursing care, wound management, fluid and electrolyte balance, shock management, and nursing care of patients with common medical conditions.' },
              { code: 'NSG 202', title: 'Pharmacology for Nurses II', credits: 2, description: 'Systemic pharmacology: antibiotics, antimalarials, analgesics, antihypertensives, antidiabetics, and drug interactions.' },
              { code: 'NSG 203', title: 'Community Health Nursing II', credits: 2, description: 'Expanded Programme on Immunization (EPI), maternal and child health services, disease surveillance and notification, and school health.' },
              { code: 'NSG 204', title: 'Paediatric Nursing I', credits: 3, description: 'Growth and development, common childhood conditions (malaria, pneumonia, diarrhoea, measles), immunisation, and paediatric nursing procedures.' },
              { code: 'NSG 205', title: 'Community Nutrition', credits: 2, description: 'Nutritional assessment methods, maternal and child nutrition, food security, and nutrition intervention programmes in Nigeria.' },
              { code: 'NSG 206', title: 'First Aid & Emergency Care', credits: 2, description: 'Basic first aid principles, wound care, fractures and splinting, poisoning, burns, shock, and emergency transportation.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'NSG 207', title: 'Medical-Surgical Nursing II', credits: 4, description: 'Nursing management of patients with cardiovascular disorders (hypertension, CVA, heart failure), respiratory disorders (asthma, TB, pneumonia), GI disorders (peptic ulcer, hepatitis), and renal disorders.' },
              { code: 'NSG 208', title: 'Paediatric Nursing II', credits: 3, description: 'Neonatal care, preterm and low birth weight care, common neonatal conditions, child with special needs, and paediatric emergency care.' },
              { code: 'NSG 209', title: 'Maternal & Child Health Nursing', credits: 3, description: 'Antenatal care, normal labour and delivery, postnatal care, family planning methods, and breast feeding support.' },
              { code: 'NSG 210', title: 'Introduction to Nursing Research', credits: 2, description: 'Research process overview, simple research designs, data collection methods, and evidence-based nursing practice.' },
              { code: 'NSG 211', title: 'Health Education & Promotion', credits: 2, description: 'Teaching and learning principles, lesson plan development, health talk delivery, and patient education materials.' },
            ],
          },
        ],
        keyTopics: ['Medical-surgical nursing (cardio, respiratory, GI, renal)', 'Paediatric nursing and child health', 'Maternal and child health', 'Immunisation (Nigeria EPI schedule)', 'Family planning methods', 'First aid and emergency management'],
        clinicalRotation: ['Medical wards', 'Surgical wards', 'Paediatric ward', 'Maternity unit (antenatal, labour, postnatal)', 'Immunisation clinic', 'Outpatient department'],
        skillsToMaster: ['Wound assessment and dressing technique', 'IV cannulation and infusion therapy', 'Intramuscular and subcutaneous injection technique', 'Paediatric assessment and drug dosage calculation', 'Partograph plotting and monitoring', 'Episiotomy care and perineal hygiene', 'Breastfeeding support and counseling', 'Catheterisation (male and female)'],
        nmcnRelevance: 'Medical-Surgical Nursing is the largest domain of the NMCN RN exam. Paediatric and Maternal-Child Health are also heavily tested. Study disease conditions, nursing management, and drug therapies.',
        studyHoursTarget: 200,
      },
      '3': {
        title: 'Third Year - Comprehensive Nursing & Licensing Preparation',
        description: 'Advanced nursing care, mental health, leadership, and intensive NMCN exam preparation with clinical internship.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'NSG 301', title: 'Medical-Surgical Nursing III', credits: 3, description: 'Nursing management of patients with neurological disorders, endocrine disorders, musculoskeletal conditions, burns, and HIV/AIDS.' },
              { code: 'NSG 302', title: 'Mental Health & Psychiatric Nursing', credits: 3, description: 'Therapeutic communication techniques, common psychiatric illnesses (schizophrenia, depression, bipolar, anxiety disorders), psychotropic medications, and Nigerian mental health legislation.' },
              { code: 'NSG 303', title: 'Community Health Nursing III', credits: 2, description: 'Rural health, nomadic health, occupational health, disaster nursing, community diagnosis, and healthcare referral system.' },
              { code: 'NSG 304', title: 'Accident & Emergency Nursing', credits: 2, description: 'Triage, emergency assessment and management, trauma care, BLS/ACLS, poisoning, and disaster nursing.' },
              { code: 'NSG 305', title: 'Nursing Leadership & Management', credits: 2, description: 'Nursing service organisation, staffing and scheduling, resource management, supervision, and quality assurance.' },
              { code: 'NSG 306', title: 'Nursing Research & Project', credits: 2, description: 'Simple research project conduct, data analysis, report writing, and presentation of findings.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'NSG 307', title: 'Nursing Ethics & Professional Practice', credits: 2, description: 'NMCN code of conduct, professional discipline, legal aspects of nursing, patient rights, informed consent, and accountability.' },
              { code: 'NSG 308', title: 'Comprehensive Clinical Internship', credits: 6, description: 'Supervised clinical practice across all major departments: medical, surgical, paediatrics, obstetrics, psychiatry, A&E, and community.' },
              { code: 'NSG 309', title: 'Community Health Practicum', credits: 3, description: 'Independent community health practice: home visits, health education, immunisation outreach, school health, and community mobilisation.' },
              { code: 'NSG 310', title: 'NMCN Exam Preparation & Comprehensive Review', credits: 3, description: 'Systematic revision of all subjects, mock NMCN examinations, case study discussions, and exam-taking strategies.' },
            ],
          },
        ],
        keyTopics: ['Advanced medical-surgical nursing', 'Mental health & psychiatric nursing', 'Emergency nursing and triage', 'Nursing leadership and ethics', 'Community health management', 'NMCN exam preparation'],
        clinicalRotation: ['Psychiatric unit', 'Accident & Emergency department', 'All departments (comprehensive internship)', 'Community health centre (independent practice)', 'NMCN clinical examination practice'],
        skillsToMaster: ['Mental status examination (MSE)', 'Triage assessment and prioritisation', 'Basic and advanced life support', 'Team leadership and delegation', 'Emergency obstetric care (basic)', 'Incident reporting and risk management', 'NMCN exam technique (objective and practical)'],
        nmcnRelevance: 'This year is entirely focused on NMCN RN licensing exam preparation. The comprehensive review covers all subjects: Medical-Surgical Nursing, Paediatric Nursing, Mental Health, Community Health, Obstetrics, Pharmacology, and Professional Ethics. The RN exam consists of 250-300 multiple-choice questions and a practical/clinical examination.',
        studyHoursTarget: 280,
      },
    },
  },
  'Midwifery Student': {
    label: 'Midwifery (RM Programme)',
    overview: 'Registered Midwifery programme offered at Schools of Midwifery in Nigeria. Available as 3-year direct entry (for secondary school leavers) or 18-month post-basic (for registered nurses). Focuses on maternal and newborn health.',
    years: {
      '1': {
        title: 'First Year - Normal Midwifery & Foundation Sciences',
        description: 'Reproductive anatomy, antenatal care, normal labour, postnatal care, neonatal care, and family planning.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'MDW 101', title: 'Reproductive Anatomy & Physiology', credits: 3, description: 'Female and male reproductive systems, menstrual cycle, fertilisation and implantation, placental development, and endocrinology of pregnancy.' },
              { code: 'MDW 102', title: 'Antenatal Care', credits: 3, description: 'Booking history and examination, antenatal assessment (Leopold maneuvers), risk screening, tetanus toxoid immunisation, and health education in pregnancy.' },
              { code: 'MDW 103', title: 'Pharmacology for Midwives', credits: 2, description: 'Drugs used in pregnancy (oxytocics, tocolytics, antihypertensives), analgesics in labour, magnesium sulphate, and safe drug administration.' },
              { code: 'MDW 104', title: 'Family Planning & Reproductive Health', credits: 2, description: 'Contraceptive methods (hormonal, barrier, IUD, implants, sterilisation), counseling techniques, service delivery, and adolescent reproductive health.' },
              { code: 'MDW 105', title: 'Maternal Nutrition', credits: 2, description: 'Nutrition in pregnancy, iron and folic acid supplementation, micronutrients, dietary counseling, and lactation nutrition.' },
              { code: 'GMD 101', title: 'Communication & Counselling Skills', credits: 2, description: 'Interpersonal communication, patient-centred counseling, breaking bad news, health education techniques, and cultural sensitivity.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'MDW 106', title: 'Normal Labour & Delivery', credits: 4, description: 'Mechanism of normal labour, stages of labour, partograph use and interpretation, delivery techniques (vertex, breech), perineal care and repair.' },
              { code: 'MDW 107', title: 'Postnatal Care', credits: 3, description: 'Immediate and late postnatal care, uterine involution, lochia assessment, perineal wound care, postnatal exercises, and family planning initiation.' },
              { code: 'MDW 108', title: 'Neonatal Care I (Normal Newborn)', credits: 3, description: 'Immediate newborn care, APGAR scoring, thermoregulation, cord care, eye care, Vitamin K administration, breastfeeding initiation, and newborn assessment.' },
              { code: 'MDW 109', title: 'Community Midwifery I', credits: 2, description: 'Community-based maternity services, traditional birth attendant (TBA) collaboration, referral systems, and maternal mortality reduction strategies in Nigeria.' },
              { code: 'MDW 110', title: 'Microbiology & Infection Prevention', credits: 2, description: 'Infection prevention in midwifery, puerperal sepsis, neonatal sepsis, universal precautions, and waste management in maternity units.' },
            ],
          },
        ],
        keyTopics: ['Reproductive anatomy and physiology', 'Antenatal care and risk assessment', 'Normal labour and partograph use', 'Postnatal care and family planning', 'Essential newborn care and resuscitation', 'Infection prevention in midwifery'],
        clinicalRotation: ['Antenatal clinic', 'Labour ward (supervised observation)', 'Postnatal ward', 'Family planning clinic', 'Neonatal unit (observation)'],
        skillsToMaster: ['Abdominal palpation (Leopold maneuvers)', 'Partograph plotting and interpretation', 'APGAR scoring', 'Episiotomy and perineal repair', 'Active management of third stage of labour', 'Breastfeeding support and positioning', 'Newborn resuscitation (Helping Babies Breathe)'],
        nmcnRelevance: 'The RM licensing exam emphasises normal pregnancy, labour, and neonatal care. Master the partograph, mechanisms of labour, and essential newborn care. The exam includes both theory and practical components.',
        studyHoursTarget: 160,
      },
      '2': {
        title: 'Second Year - Complex Midwifery & Gynaecology',
        description: 'High-risk pregnancy, complicated labour and delivery, obstetric emergencies, gynaecological conditions, and expanded neonatal care.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'MDW 201', title: 'Complicated Pregnancy (High-Risk)', credits: 3, description: 'Hypertensive disorders (pre-eclampsia, eclampsia), antepartum haemorrhage (placenta praevia, abruptio placentae), multiple pregnancy, gestational diabetes, Rh incompatibility.' },
              { code: 'MDW 202', title: 'Complicated Labour & Delivery', credits: 4, description: 'Obstructed labour, prolonged labour, ruptured uterus, cord prolapse, shoulder dystocia, postpartum haemorrhage, assisted deliveries (vacuum, forceps), and caesarean section care.' },
              { code: 'MDW 203', title: 'Neonatal Care II (High-Risk Newborn)', credits: 3, description: 'Preterm and low birth weight care, neonatal jaundice, neonatal infections, congenital anomalies, birth asphyxia, and neonatal intensive care principles.' },
              { code: 'MDW 204', title: 'Gynaecology for Midwives I', credits: 2, description: 'Gynaecological assessment, menstrual cycle disorders, pelvic infections (PID), sexually transmitted infections, cervical cancer screening.' },
              { code: 'MDW 205', title: 'Research Methods in Midwifery', credits: 2, description: 'Midwifery research process, quantitative and qualitative methods, evidence-based midwifery practice, and critical appraisal of literature.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'MDW 206', title: 'Complicated Postnatal Care', credits: 3, description: 'Postpartum haemorrhage (primary and secondary), puerperal sepsis, thromboembolic disorders, postpartum psychiatric disorders, and maternal near-miss audit.' },
              { code: 'MDW 207', title: 'Gynaecology for Midwives II', credits: 2, description: 'Uterine fibroids, endometriosis, pelvic organ prolapse, infertility, ectopic pregnancy, gestational trophoblastic disease, and gynaecological surgeries.' },
              { code: 'MDW 208', title: 'Community Midwifery II', credits: 2, description: 'Home birth planning and management, TBA training and supervision, community emergency transport schemes, and maternal death reviews.' },
              { code: 'MDW 209', title: 'Leadership & Management in Midwifery', credits: 2, description: 'Midwifery service management, maternal health policy in Nigeria, advocacy for maternal health, and quality improvement in maternity care.' },
              { code: 'MDW 210', title: 'Adolescent, Sexual & Reproductive Health', credits: 2, description: 'Teenage pregnancy, STI/HIV in adolescents, reproductive rights, female genital mutilation (FGM), gender-based violence, and comprehensive sexuality education.' },
            ],
          },
        ],
        keyTopics: ['High-risk pregnancy management', 'Obstetric emergencies (PPH, eclampsia, cord prolapse)', 'Complicated labour and operative deliveries', 'Gynaecological conditions', 'High-risk neonatal care', 'Maternal mortality reduction strategies'],
        clinicalRotation: ['Labour ward (active management)', 'High-risk antenatal clinic', 'Gynaecology ward', 'Special Care Baby Unit (SCBU)/NICU', 'Community rotation with home births'],
        skillsToMaster: ['Obstetric emergency management (PPH protocols)', 'Manual removal of placenta', 'Episiotomy and repair technique', 'Vacuum extraction assistance', 'Advanced neonatal resuscitation', 'Obstetric ultrasound basics', 'Cervical cancer screening (VIA/VILI)'],
        nmcnRelevance: 'Obstetric emergencies and high-risk conditions form a major part of the RM licensing exam. Study the management of PPH, pre-eclampsia/eclampsia, and obstructed labour in depth.',
        studyHoursTarget: 220,
      },
      '3': {
        title: 'Third Year - Advanced Practice & Licensing Preparation',
        description: 'Advanced midwifery practice, leadership, research project completion, and intensive preparation for the RM licensing exam.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'MDW 301', title: 'Advanced Midwifery Practice', credits: 3, description: 'Evidence-based midwifery models, advanced clinical decision-making, complex case management, and consultation/referral protocols.' },
              { code: 'MDW 302', title: 'Teaching & Mentorship in Midwifery', credits: 2, description: 'Clinical teaching methods, preceptorship, student supervision, lesson planning, and evaluation of clinical competence.' },
              { code: 'MDW 303', title: 'Midwifery Research Project', credits: 3, description: 'Supervised research project on a midwifery topic, data analysis, report writing, and oral presentation.' },
              { code: 'MDW 304', title: 'Legal & Ethical Issues in Midwifery', credits: 2, description: 'NMCN midwifery code of ethics, professional discipline, informed consent in obstetrics, maternal death litigation, and accountability.' },
              { code: 'MDW 305', title: 'Reproductive Health Policy & Programmes', credits: 2, description: 'National reproductive health policy, MDGs/SDGs, NHIS maternal health coverage, safe motherhood initiatives, and advocacy strategies.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'MDW 306', title: 'Comprehensive Clinical Internship (Midwifery)', credits: 6, description: 'Supervised independent practice across all maternity units, including labour ward, antenatal clinic, postnatal ward, SCBU, and community.' },
              { code: 'MDW 307', title: 'Community Midwifery Practicum', credits: 4, description: 'Independent community midwifery practice: conducting deliveries in health centres, home visits, family planning services, and community health education.' },
              { code: 'MDW 308', title: 'RM Licensing Exam Preparation', credits: 3, description: 'Integrated revision of all midwifery subjects, mock RM examinations, practical examination drills, clinical case scenarios, and exam strategy.' },
            ],
          },
        ],
        keyTopics: ['Advanced midwifery clinical decision-making', 'Midwifery leadership and mentorship', 'Legal and ethical accountability', 'Maternal health policy advocacy', 'Independent clinical practice'],
        clinicalRotation: ['All maternity units (independent practice)', 'Community midwifery independent practice', 'Midwifery leadership rotation', 'RM licensing exam clinical drills'],
        skillsToMaster: ['Independent management of labour and delivery', 'Recognition and management of obstetric emergencies (without supervision)', 'Clinical teaching and preceptorship', 'Quality improvement in maternity care', 'RM licensing exam technique (theory and practical)'],
        nmcnRelevance: 'The RM licensing exam is the culmination of the programme. It includes written examinations (250-300 MCQs covering all midwifery subjects), objective structured clinical examinations (OSCEs), and a practical delivery examination. Study past RM exam questions and practice clinical procedures.',
        studyHoursTarget: 280,
      },
    },
  },
  'Community Nursing Student': {
    label: 'Community Nursing / Community Health (CHEW Programme)',
    overview: 'Community Health Extension Worker (CHEW) programme offered at Schools of Health Technology. Focuses on primary health care delivery at the community level. 3-year programme leading to CHEW certification.',
    years: {
      '1': {
        title: 'First Year - Foundation in Community Health',
        description: 'Basic health sciences, community health principles, environmental health, health education, and first aid.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'CHW 101', title: 'Basic Anatomy & Physiology', credits: 3, description: 'Structure and functions of body systems relevant to community health practice: musculoskeletal, nervous, cardiovascular, respiratory, digestive, and reproductive systems.' },
              { code: 'CHW 102', title: 'Principles of Community Health', credits: 3, description: 'Concept of health and disease, community health definition, levels of healthcare, PHC principles (Alma Ata), community diagnosis, and Nigerian health system structure.' },
              { code: 'CHW 103', title: 'Environmental Health I', credits: 2, description: 'Water supply and purification, sanitation and waste disposal, food hygiene, housing standards, vector control, and environmental health regulations in Nigeria.' },
              { code: 'CHW 104', title: 'Health Education & Communication', credits: 2, description: 'Health behaviour theories, communication methods, health talk preparation and delivery, visual aids, and community mobilisation strategies.' },
              { code: 'CHW 105', title: 'Microbiology & Disease Transmission', credits: 2, description: 'Disease-causing organisms, modes of transmission, chain of infection, immunology basics, and disease prevention principles.' },
              { code: 'GCH 101', title: 'English Language & Report Writing', credits: 2, description: 'Professional writing, health records documentation, report preparation, and verbal communication skills.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'CHW 106', title: 'Pharmacology & Essential Drugs', credits: 2, description: 'Essential drugs list for primary health care, drug storage and management, routes of administration, dosage calculations, and prescription handling.' },
              { code: 'CHW 107', title: 'Family & Child Health I', credits: 3, description: 'Family health concepts, growth monitoring, child health services, common childhood illnesses (malaria, diarrhoea, ARI, measles), IMCI strategy, and nutrition.' },
              { code: 'CHW 108', title: 'Nutrition in Community Health', credits: 2, description: 'Basic nutrition concepts, malnutrition types (kwashiorkor, marasmus), food security, therapeutic nutrition, micronutrient deficiencies, and supplementation programmes.' },
              { code: 'CHW 109', title: 'First Aid & Emergency Management', credits: 2, description: 'First aid principles, wound care, bleeding control, fractures and splinting, burns, poisoning, snake bites, shock management, and emergency referral.' },
              { code: 'CHW 110', title: 'Sociology & Psychology for Community Health', credits: 2, description: 'Social determinants of health, cultural beliefs affecting health, community social structure, human behaviour, and mental health basics.' },
            ],
          },
        ],
        keyTopics: ['Community health principles', 'Environmental health and sanitation', 'Health education techniques', 'Family and child health', 'First aid and emergency response', 'Essential drugs management'],
        clinicalRotation: ['Community health centre observation', 'Environmental health field visit (water/sanitation)', 'Health education outreach observation'],
        skillsToMaster: ['Health talk delivery in community settings', 'Home visiting techniques', 'Environmental health inspection (water, housing, food)', 'Basic first aid and emergency response', 'Growth monitoring charting', 'Immunisation cold chain maintenance basics'],
        nmcnRelevance: 'Foundation for the CHEW certification exam. PHC principles, environmental health, and health education are core subjects.',
        studyHoursTarget: 110,
      },
      '2': {
        title: 'Second Year - Maternal, Child & Disease Control Services',
        description: 'Maternal and child health services, communicable disease control, immunisation, reproductive health, and PHC management.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'CHW 201', title: 'Maternal & Child Health Services', credits: 3, description: 'Antenatal care (booking, assessment, risk identification), postnatal care, family planning counseling and methods, breast feeding support, and child spacing.' },
              { code: 'CHW 202', title: 'Communicable Disease Control & Surveillance', credits: 3, description: 'Epidemiology of communicable diseases in Nigeria (malaria, TB, HIV/AIDS, cholera, measles, meningitis, Lassa fever), disease notification, outbreak investigation, and control measures.' },
              { code: 'CHW 203', title: 'Primary Health Care Management I', credits: 2, description: 'PHC centre organisation, health records management, supplies and equipment management, supervision of community volunteers, and reporting systems.' },
              { code: 'CHW 204', title: 'Reproductive Health & STI Management', credits: 2, description: 'Family planning methods (contraceptives), STI/HIV syndromic management, adolescent reproductive health, and reproductive health rights.' },
              { code: 'CHW 205', title: 'Immunisation Services', credits: 2, description: 'Nigeria Expanded Programme on Immunisation (EPI) schedule, cold chain management, vaccine administration, injection safety, and coverage monitoring.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'CHW 206', title: 'Non-Communicable Disease Control', credits: 2, description: 'Epidemiology and management of hypertension, diabetes mellitus, cancer (cervical, breast), sickle cell disease, and mental disorders at community level.' },
              { code: 'CHW 207', title: 'Maternal & Neonatal Health', credits: 3, description: 'Screening for high-risk pregnancy, danger signs in pregnancy, birth preparedness, clean delivery practices, essential newborn care, and maternal death audit.' },
              { code: 'CHW 208', title: 'Environmental Health II', credits: 2, description: 'Food safety and inspection, occupational health hazards, air and noise pollution, climate change and health, and environmental impact assessment.' },
              { code: 'CHW 209', title: 'Primary Health Care Management II', credits: 2, description: 'PHC programme planning, budgeting, monitoring and evaluation, community participation strategies, and health centre financial management.' },
              { code: 'CHW 210', title: 'School Health Services', credits: 2, description: 'School health appraisal, school environment inspection, health services in schools, health instruction, and school feeding programmes.' },
            ],
          },
        ],
        keyTopics: ['Maternal and child health services', 'Communicable disease control', 'Immunisation (EPI Nigeria)', 'Family planning provision', 'PHC centre management', 'Disease surveillance and notification'],
        clinicalRotation: ['Maternal and child health (MCH) clinic', 'Immunisation post', 'PHC centre management attachment', 'STI/HIV clinic', 'School health programme'],
        skillsToMaster: ['Antenatal booking and assessment', 'Growth monitoring and promotion', 'Immunisation administration and cold chain management', 'Family planning counseling and method provision', 'Disease notification and reporting', 'Health centre record keeping', 'Community diagnosis and mapping'],
        nmcnRelevance: 'Maternal-child health and disease control form the core of the CHEW certification exam. Study the EPI schedule, common communicable diseases, and PHC management.',
        studyHoursTarget: 170,
      },
      '3': {
        title: 'Third Year - Advanced Community Practice & Certification',
        description: 'Advanced community health management, disaster response, research, and comprehensive field practice preparing for CHEW certification.',
        semesters: [
          {
            name: 'First Semester',
            courses: [
              { code: 'CHW 301', title: 'Community Health Management & Supervision', credits: 3, description: 'Advanced PHC management, health team leadership, supervision of CHEWs and community volunteers, quality improvement, and health programme evaluation.' },
              { code: 'CHW 302', title: 'Research Methods & Community Needs Assessment', credits: 2, description: 'Community health survey methods, needs assessment techniques, data analysis, report writing, and use of findings for programme planning.' },
              { code: 'CHW 303', title: 'Health Policy, Advocacy & Community Mobilisation', credits: 2, description: 'National health policies (NHIS, NPHCDA), advocacy strategies, community dialogue, social mobilisation, and partnership building.' },
              { code: 'CHW 304', title: 'Disaster Preparedness & Management', credits: 2, description: 'Types of disasters, disaster risk reduction, emergency response planning, triage in mass casualty, and community resilience building.' },
              { code: 'CHW 305', title: 'Ethics & Professional Practice in Community Health', credits: 2, description: 'Professional ethics, community health workers code of conduct, confidentiality, patient rights, and professional regulation.' },
            ],
          },
          {
            name: 'Second Semester',
            courses: [
              { code: 'CHW 306', title: 'Comprehensive Community Health Practicum', credits: 6, description: 'Full-time supervised field practice: managing PHC centre, conducting community outreach, home visiting, disease surveillance, school health, and MCH services.' },
              { code: 'CHW 307', title: 'CHEW Certification Exam Preparation', credits: 3, description: 'Comprehensive revision of all subjects, mock certification examinations, practical examination drills, and exam-taking strategies.' },
            ],
          },
        ],
        keyTopics: ['Community health management and supervision', 'Health policy and advocacy', 'Disaster preparedness', 'Community health research', 'Professional ethics and accountability'],
        clinicalRotation: ['Independent PHC centre management', 'Rural community health posting', 'Local government health authority', 'NGO/Community-based organisation placement'],
        skillsToMaster: ['Health centre management and supervision', 'Community mobilisation and advocacy', 'Training and supervision of community volunteers', 'Health programme monitoring and evaluation', 'Disaster response coordination', 'CHEW certification exam technique'],
        nmcnRelevance: 'CHEW certification exam covers all community health subjects. The final exam includes theory and practical components. Focus on integrated case scenarios, PHC management, and disease control.',
        studyHoursTarget: 230,
      },
    },
  },
  'Post-Basic Student': {
    label: 'Post-Basic Nursing Programme',
    overview: 'Post-basic specialty programmes for registered nurses seeking advanced specialty qualifications. Programmes include Psychiatric Nursing, Ophthalmic Nursing, ENT Nursing, Orthopaedic Nursing, Paediatric Nursing, Anaesthesia Nursing, and others. Duration: 18-24 months.',
    years: {
      '1': {
        title: 'Post-Basic Programme (18-24 Months)',
        description: 'Advanced specialty theory and clinical practice. Content varies by specialty (Psychiatric, Ophthalmic, ENT, Orthopaedic, Paediatric, Anaesthesia, etc.). Includes advanced nursing science, research, leadership, and clinical preceptorship.',
        semesters: [
          {
            name: 'Core Theory Modules (First 6 Months)',
            courses: [
              { code: 'PBN 101', title: 'Advanced Pathophysiology & Pharmacology', credits: 3, description: 'Advanced study of disease mechanisms and pharmacotherapeutics relevant to the chosen specialty, with emphasis on evidence-based practice.' },
              { code: 'PBN 102', title: 'Specialty Nursing Theory I', credits: 4, description: 'In-depth theoretical foundations of the chosen specialty: assessment, diagnosis, intervention, and evaluation within the specialty area.' },
              { code: 'PBN 103', title: 'Advanced Research & Evidence-Based Practice', credits: 3, description: 'Research methodology, critical appraisal of literature, evidence implementation, and quality improvement methodologies specific to specialty practice.' },
              { code: 'PBN 104', title: 'Leadership, Management & Health Policy', credits: 3, description: 'Advanced leadership theories, healthcare management, policy analysis, strategic planning, interprofessional collaboration, and patient advocacy.' },
              { code: 'PBN 105', title: 'Clinical Teaching & Mentorship', credits: 2, description: 'Educational theories for clinical settings, preceptorship models, student assessment and evaluation, clinical instruction techniques, and feedback strategies.' },
            ],
          },
          {
            name: 'Clinical Practice Modules (6-12 Months)',
            courses: [
              { code: 'PBN 201', title: 'Specialty Nursing Theory II & Clinical Practicum', credits: 6, description: 'Advanced clinical practice in the chosen specialty area under supervision. Includes specialty-specific procedures, patient management, and case conferences.' },
              { code: 'PBN 202', title: 'Supervised Clinical Placement (Specialty Unit)', credits: 8, description: 'Full-time supervised clinical placement in a recognised specialty unit. Minimum required clinical hours as specified by NMCN for the specialty.' },
              { code: 'PBN 203', title: 'Quality Improvement Project', credits: 3, description: 'Design and implementation of a quality improvement project in the specialty setting, including data collection, analysis, and presentation of outcomes.' },
              { code: 'PBN 204', title: 'Specialty Certification Exam Preparation', credits: 2, description: 'Comprehensive review of specialty content, mock examinations, clinical examination preparation, and study strategies for the NMCN specialty certification exam.' },
            ],
          },
        ],
        keyTopics: ['Advanced pathophysiology and pharmacology', 'Specialty-specific nursing theory and practice', 'Evidence-based practice implementation', 'Clinical leadership and management', 'Quality improvement in specialty care', 'Clinical teaching and mentorship'],
        clinicalRotation: ['Specialty unit (full-time clinical placement)', 'Teaching/preceptorship placement', 'Leadership rotation with specialty unit manager', 'Community/outreach specialty services (where applicable)'],
        skillsToMaster: ['Advanced clinical assessment in specialty area', 'Specialty-specific clinical procedures and interventions', 'Clinical teaching and preceptorship', 'Evidence-based practice implementation', 'Quality improvement project methodology', 'Specialty certification exam technique'],
        nmcnRelevance: 'Post-basic graduates sit for the NMCN specialty certification examination in their chosen specialty. The exam includes both theoretical and practical components. Successful candidates are awarded the Registered Nurse (Specialty) qualification.',
        studyHoursTarget: 300,
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
        overview: programme.overview,
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
    overview: val.overview,
    maxYear: Math.max(...Object.keys(val.years).map(Number)),
  }));
  res.json({ success: true, data: programmes });
}
