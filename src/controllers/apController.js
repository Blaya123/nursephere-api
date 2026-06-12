const curriculumData = {
  'BNSc Student': {
    label: 'BNSc Nursing (4-Year Degree Programme)',
    overview: 'Bachelor of Nursing Science degree offered at Nigerian universities (UNIBEN, UNILAG, OAU, UNN, UI, etc.). Prepares students for RN licensing and leadership roles. Curriculum follows NMCN and NUC minimum standards.',
    years: {
      '1': {
        title: '100 Level - Basic Medical & Behavioural Sciences',
        description: 'Foundation in basic sciences, behavioural sciences, and introduction to professional nursing. Emphasis on normal structure and function of the human body.',
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'ANA 111', title: 'Human Anatomy I', credits: 3, description: 'Gross anatomy of the musculoskeletal system, histology of basic tissues, and embryology introduction.', studyNotes: 'Focus on bone markings, muscle attachments, and tissue types. Understand the organisation of the body from cells to systems. Key: axial vs appendicular skeleton, classification of joints, and major muscle groups.' },
            { code: 'PHS 111', title: 'Human Physiology I', credits: 3, description: 'Cell physiology, nerve and muscle physiology, blood and body fluids, cardiovascular physiology.', studyNotes: 'Understand homeostasis and feedback mechanisms. Study cell membrane transport (diffusion, osmosis, active transport). Learn the cardiac cycle, blood pressure regulation, and composition of blood.' },
            { code: 'BCH 111', title: 'Medical Biochemistry I', credits: 2, description: 'Chemistry and metabolism of carbohydrates, proteins, lipids, enzymes, and nucleic acids.', studyNotes: 'Focus on the four major biomolecules and their functions. Understand enzyme kinetics and factors affecting enzyme activity. Know the metabolic pathways: glycolysis, Krebs cycle, electron transport chain.' },
            { code: 'NSC 111', title: 'Introduction to Professional Nursing', credits: 3, description: 'History of nursing in Nigeria, nursing theories (Nightingale, Henderson, Orem), roles of the nurse, ethical and legal foundations.', studyNotes: 'Know the history of nursing in Nigeria (early missionaries, establishment of schools of nursing). Understand major nursing theories: Nightingale\'s environmental theory, Henderson\'s 14 basic needs, Orem\'s self-care deficit theory. Study the NMCN establishment and functions.' },
            { code: 'PSY 111', title: 'General Psychology', credits: 2, description: 'Human development across the lifespan, learning theories, motivation, emotion, perception, and personality.', studyNotes: 'Study Piaget\'s stages of cognitive development, Erikson\'s psychosocial stages, Maslow\'s hierarchy of needs. Understand classical and operant conditioning (Pavlov, Skinner). Learn defence mechanisms and their role in coping.' },
            { code: 'SOC 111', title: 'Introduction to Sociology', credits: 2, description: 'Basic sociological concepts, social structure, culture, socialization, family, and health-illness continuum in Nigeria.', studyNotes: 'Understand the sick role concept (Parsons). Study the influence of culture on health-seeking behaviour in Nigeria. Know the types of families and their impact on health. Understand social stratification and healthcare access.' },
            { code: 'GST 111', title: 'Use of English & Communication Skills', credits: 2, description: 'Academic writing, reading comprehension, note-taking, public speaking, and professional documentation.', studyNotes: 'Focus on professional writing standards (SOAPIE notes, nursing reports). Practice public speaking for health talks. Learn correct medical terminology and abbreviations.' },
            { code: 'GST 112', title: 'Nigerian Peoples & Culture', credits: 2, description: 'Nigerian ethnic groups, cultural diversity, traditional health practices, and their impact on healthcare.', studyNotes: 'Study the three major ethnic groups (Hausa, Igbo, Yoruba) and their health beliefs. Understand traditional medicine practices and their integration with modern healthcare. Learn cultural sensitivity in nursing care.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'ANA 112', title: 'Human Anatomy II', credits: 3, description: 'Anatomy of the nervous system, cardiovascular system, respiratory system, digestive system, and reproductive system.', studyNotes: 'Study the structure of the heart, blood vessels, and conduction system. Understand the branching of the respiratory tree. Learn the anatomy of the digestive organs and accessory structures. Know the male and female reproductive anatomy in detail.' },
            { code: 'PHS 112', title: 'Human Physiology II', credits: 3, description: 'Respiratory physiology, renal physiology, gastrointestinal physiology, endocrine physiology, and reproductive physiology.', studyNotes: 'Understand the mechanisms of breathing, gas exchange, and transport. Study kidney function: filtration, reabsorption, secretion, and urine formation. Learn the hormones of the pituitary, thyroid, adrenal, and reproductive glands.' },
            { code: 'BCH 112', title: 'Medical Biochemistry II', credits: 2, description: 'Vitamins, minerals, nutrition, hormonal regulation, acid-base balance, and inborn errors of metabolism.', studyNotes: 'Know the fat-soluble and water-soluble vitamins, their sources, and deficiency diseases. Understand acid-base balance (pH, buffers, respiratory and renal compensation). Study common inborn errors: PKU, galactosemia, G6PD deficiency.' },
            { code: 'MCB 111', title: 'General Microbiology & Parasitology', credits: 2, description: 'Bacteria, viruses, fungi, parasites of medical importance in Nigeria, infection cycle, and host defence mechanisms.', studyNotes: 'Focus on pathogens common in Nigeria: Plasmodium (malaria), Mycobacterium tuberculosis, HIV, Salmonella typhi, Neisseria meningitidis. Understand the chain of infection and methods of breaking it. Study sterilisation, disinfection, and antisepsis methods.' },
            { code: 'NSC 112', title: 'Fundamentals of Nursing Practice', credits: 3, description: 'Basic nursing skills: vital signs, personal hygiene, mobility and positioning, safety, infection prevention, and document recording.', studyNotes: 'Master the correct techniques for measuring temperature (oral, axillary, rectal), pulse (sites and characteristics), respiration, and blood pressure. Learn body mechanics for patient transfer. Understand the principles of medical and surgical asepsis.' },
            { code: 'NSC 113', title: 'Health Assessment I', credits: 2, description: 'Health history interviewing techniques, physical examination methods (inspection, palpation, percussion, auscultation), vital signs assessment.', studyNotes: 'Master the four examination techniques: inspection, palpation, percussion, auscultation. Learn systematic head-to-toe assessment. Practice health history taking using the PQRST and OLDCARTS mnemonics for symptom analysis.' },
            { code: 'GST 113', title: 'Introduction to Computer & Information Technology', credits: 2, description: 'Computer hardware, software, internet skills, electronic health records basics, and data management.', studyNotes: 'Learn basic computer operations, Microsoft Office applications (Word, Excel, PowerPoint). Understand electronic health record (EHR) systems and their role in nursing documentation. Practice data entry and management.' },
            { code: 'GST 114', title: 'Entrepreneurship & Innovation', credits: 2, description: 'Entrepreneurial mindset, business planning, healthcare venture creation, and innovation in nursing practice.', studyNotes: 'Understand the principles of business planning and healthcare entrepreneurship. Explore nursing-led business ventures: private clinics, home care services, health consultancy. Learn about funding sources and business registration in Nigeria.' },
          ],
        }],
        keyTopics: ['Human anatomy & physiology', 'Nursing fundamentals & theories', 'Infection prevention & control', 'Health assessment techniques', 'Normal body structure & function', 'Professional communication'],
        clinicalRotation: ['Pre-clinical skills laboratory practice', 'Observation posting in general hospital wards', 'Simulation lab for basic nursing procedures'],
        skillsToMaster: ['Hand washing and aseptic technique', 'Measurement of vital signs (T, P, R, BP)', 'Bed making (occupied and unoccupied)', 'Patient positioning and transfer', 'Sterile gloving and gowning', 'Medical records documentation', 'Admission and discharge procedures'],
        nmcnRelevance: 'Anatomy, Physiology, and Fundamentals of Nursing form the foundation of the NMCN licensing exam. Pay special attention to body systems and basic nursing procedures.',
        studyHoursTarget: 150,
        studyObjectives: [
          'Identify and describe the structure and functions of all major body systems',
          'Demonstrate correct measurement and documentation of vital signs',
          'Apply principles of asepsis and infection prevention in clinical practice',
          'Perform basic nursing procedures: bed making, positioning, sterile gloving',
          'Explain the nursing process and its application in patient care',
          'Describe healthcare delivery structure and the role of nursing in Nigeria',
        ],
        recommendedTextbooks: ['Tortora & Derrickson - Principles of Anatomy & Physiology', 'Guyton & Hall - Textbook of Medical Physiology', 'Kozier & Erb - Fundamentals of Nursing', 'Oche & Chubike - Anatomy and Physiology for Nurses (African Edition)', 'NMCN - Basic Nursing Curriculum and Study Guide'],
      },
      '2': {
        title: '200 Level - Introduction to Clinical Sciences',
        description: 'Transition from basic sciences to clinical nursing. Introduction to medical-surgical nursing, pharmacology, community health, and research.',
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'NSC 211', title: 'Medical-Surgical Nursing I', credits: 4, description: 'Principles of medical-surgical nursing, perioperative nursing care, wound care and healing, fluid and electrolyte balance, pain assessment and management.', studyNotes: 'Master the perioperative nursing process (pre-op, intra-op, post-op). Understand wound classification and healing phases. Study fluid and electrolyte imbalances (dehydration, edema, electrolyte disturbances). Learn pain assessment tools and pharmacological/non-pharmacological pain management.' },
            { code: 'PHA 211', title: 'Pharmacology for Nurses I', credits: 3, description: 'General pharmacological principles, drug classifications and actions, pharmacokinetics and pharmacodynamics, dosage calculations, drug legislation in Nigeria.', studyNotes: 'Understand pharmacokinetics (absorption, distribution, metabolism, excretion) and pharmacodynamics (receptor theory, dose-response). Master dosage calculations (body weight, body surface area, IV drip rates). Study the Nigerian drug regulatory system (NAFDAC, PCN). Learn the rights of drug administration.' },
            { code: 'NUT 211', title: 'Nutrition & Dietetics', credits: 2, description: 'Therapeutic diets for common conditions, nutritional assessment, malnutrition in Nigeria, enteral and parenteral nutrition.', studyNotes: 'Study therapeutic diets: diabetic, renal, cardiac, high-protein, low-sodium. Understand nutritional assessment methods (anthropometric, biochemical, clinical, dietary). Learn management of malnutrition: kwashiorkor and marasmus. Study enteral tube feeding and parenteral nutrition indications.' },
            { code: 'NSC 212', title: 'Community Health Nursing I', credits: 3, description: 'Primary Health Care concept (Alma Ata), levels of healthcare in Nigeria, epidemiology basics, disease surveillance, and community diagnosis.', studyNotes: 'Understand the Alma Ata declaration and PHC principles (equity, community participation, inter-sectoral collaboration). Study the Nigerian healthcare system: primary, secondary, tertiary levels. Learn epidemiological measures: incidence, prevalence, mortality rates. Understand disease surveillance and notification.' },
            { code: 'PAT 211', title: 'General Pathology', credits: 2, description: 'Cell injury and adaptation, inflammation and repair, neoplasia, haemodynamic disorders, and infection pathogenesis.', studyNotes: 'Study cell adaptation mechanisms (atrophy, hypertrophy, hyperplasia, metaplasia, dysplasia). Understand the inflammatory process (acute and chronic). Learn wound healing phases. Study neoplasia: benign vs malignant, TNM staging. Understand oedema, thrombosis, embolism, and shock.' },
            { code: 'GST 211', title: 'Logic, Philosophy & Human Reasoning', credits: 2, description: 'Critical thinking, clinical reasoning, ethical decision-making, and logical analysis in healthcare.', studyNotes: 'Apply critical thinking to clinical scenarios. Understand deductive and inductive reasoning in nursing diagnosis. Study ethical theories (utilitarianism, deontology, principlism) and their application to nursing dilemmas.' },
            { code: 'NSC 213', title: 'Introduction to Nursing Research', credits: 2, description: 'Research purpose, types of research, research process overview, literature searching, and ethical considerations.', studyNotes: 'Understand quantitative vs qualitative research approaches. Learn the steps of the research process. Study ethical principles in research (informed consent, confidentiality, beneficence). Practice literature searching using PubMed, CINAHL, Google Scholar.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'NSC 214', title: 'Medical-Surgical Nursing II', credits: 4, description: 'Nursing management of patients with cardiovascular disorders (hypertension, heart failure, CAD), respiratory disorders (asthma, COPD, pneumonia), GI disorders (ulcers, hepatitis), and renal disorders (UTI, renal failure).', studyNotes: 'For cardiovascular: study hypertension (classification, management), heart failure (left vs right sided), coronary artery disease (MI care). For respiratory: asthma (status asthmaticus), COPD, pneumonia types. For GI: peptic ulcer disease (H. pylori), hepatitis (A, B, C). For renal: UTI, acute and chronic renal failure, dialysis care.' },
            { code: 'PHA 212', title: 'Pharmacology for Nurses II', credits: 3, description: 'Drugs affecting the cardiovascular system, respiratory system, GI system, central nervous system, antimicrobials, antimalarials, and vaccines.', studyNotes: 'Study cardiovascular drugs: antihypertensives (ACE inhibitors, ARBs, CCBs, diuretics), antiarrhythmics, anticoagulants. Respiratory drugs: bronchodilators (beta-2 agonists), corticosteroids, leukotriene antagonists. Antimicrobials: beta-lactams, macrolides, fluoroquinolones, tetracyclines. Antimalarials: artemisinin-based combination therapies (ACTs). Study the Nigerian immunisation schedule.' },
            { code: 'NSC 215', title: 'Community Health Nursing II', credits: 3, description: 'Maternal and child health services, Expanded Programme on Immunization (EPI) in Nigeria, school health programme, occupational health, and environmental health.', studyNotes: 'Study the Nigerian EPI schedule: BCG at birth, OPV/IPV, DPT, hepatitis B, measles, yellow fever. Understand cold chain management (reverse cold chain). Learn maternal and child health services (antenatal care schedule, high-risk screening). Study occupational health hazards and preventive measures.' },
            { code: 'NSC 216', title: 'Pathophysiology for Nurses', credits: 2, description: 'Altered physiological states in common diseases, mechanisms of disease progression, and clinical manifestations.', studyNotes: 'Understand the pathophysiology of common diseases: hypertension (increased peripheral resistance, RAAS activation), diabetes (insulin resistance, beta-cell dysfunction), heart failure (reduced ejection fraction, compensatory mechanisms). Relate pathophysiology to clinical signs and symptoms.' },
            { code: 'NSC 217', title: 'Introduction to Health Management', credits: 2, description: 'Healthcare system structure in Nigeria, health policy, resource management, and quality assurance basics.', studyNotes: 'Study the National Health Act and National Health Insurance Scheme (NHIS). Understand healthcare financing in Nigeria: budgetary allocation, donor funding, out-of-pocket expenditure. Learn basic management functions: planning, organising, staffing, directing, controlling.' },
            { code: 'NSC 218', title: 'Health Promotion & Education', credits: 2, description: 'Health behaviour theories, patient education strategies, health communication, and community mobilisation techniques.', studyNotes: 'Study health behaviour models: Health Belief Model, Transtheoretical Model, Theory of Planned Behaviour. Learn effective patient education strategies (teach-back, demonstration, written materials). Understand communication barriers and how to overcome them in the Nigerian context.' },
          ],
        }],
        keyTopics: ['Medical-surgical nursing management', 'Pharmacology and drug calculations', 'Community health & PHC in Nigeria', 'Wound care and surgical nursing', 'Fluid, electrolyte & acid-base balance', 'Immunization schedule (Nigeria EPI)'],
        clinicalRotation: ['Medical wards', 'Surgical wards', 'Community health centre posting', 'Outpatient department', 'Immunization clinic'],
        skillsToMaster: ['Wound assessment and dressing technique', 'IV cannulation and IV fluid administration', 'Drug administration (oral, IM, SC, IV, sublingual)', 'Nasogastric tube insertion and feeding', 'Urinary catheterization (male and female)', 'Oxygen therapy administration', 'Immunization administration technique'],
        nmcnRelevance: 'Medical-Surgical Nursing and Pharmacology are the most heavily weighted domains in the NMCN exam. Study cardiovascular, respiratory, GI, and renal systems thoroughly.',
        studyHoursTarget: 220,
        studyObjectives: [
          'Perform comprehensive patient assessment and identify nursing diagnoses for common medical-surgical conditions',
          'Calculate and administer medications safely using correct dosage formulas',
          'Apply the nursing process in the care of patients with cardiovascular, respiratory, GI, and renal disorders',
          'Describe the Nigerian healthcare system and the role of community health nursing',
          'Demonstrate understanding of drug classifications, mechanisms, and nursing implications',
          'Plan and implement health education sessions for patients and communities',
        ],
        recommendedTextbooks: ['Brunner & Suddarth - Textbook of Medical-Surgical Nursing', 'Lilley - Pharmacology and the Nursing Process', 'Park\'s Textbook of Preventive and Social Medicine', 'Lewis - Medical-Surgical Nursing (Assessment and Management)', 'NMCN - Community Health Nursing Curriculum'],
      },
      '3': {
        title: '300 Level - Specialty Nursing Areas',
        description: 'Specialised nursing areas: paediatric, mental health, ophthalmic, ENT, emergency nursing. Community health deepening and research project initiation.',
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'NSC 311', title: 'Paediatric Nursing I', credits: 4, description: 'Growth and development from infancy to adolescence, common childhood illnesses in Nigeria (malaria, pneumonia, diarrhoea, measles), neonatal care, and paediatric assessment.', studyNotes: 'Study growth and development milestones (weight, height, head circumference, developmental milestones). Common childhood illnesses in Nigeria: malaria (cerebral malaria, anaemia), pneumonia (IMCI classification), diarrhoea (types of dehydration), measles (complications). Learn Integrated Management of Childhood Illness (IMCI) strategy.' },
            { code: 'NSC 312', title: 'Mental Health & Psychiatric Nursing I', credits: 3, description: 'Therapeutic communication, nurse-patient relationship, common psychiatric disorders (schizophrenia, depression, bipolar), psychopharmacology, and mental health legislation in Nigeria.', studyNotes: 'Master therapeutic communication techniques (active listening, silence, open-ended questions, reflection). Study major psychiatric disorders: schizophrenia (positive and negative symptoms), major depressive disorder, bipolar disorder (mania, depression). Learn antipsychotic and antidepressant drug classes, their side effects and nursing considerations. Study the Nigerian Mental Health Act (Lunacy Ordinance vs new Mental Health Bill).' },
            { code: 'NSC 313', title: 'Community Health Nursing III', credits: 3, description: 'Rural health challenges in Nigeria, nomadic population health, disaster nursing, occupational health nursing, and rehabilitation nursing.', studyNotes: 'Study rural health challenges: shortage of health workers, inadequate facilities, cultural barriers, poverty. Understand nomadic health programmes (pastoralist communities). Learn disaster nursing: triage, disaster management cycle (mitigation, preparedness, response, recovery). Study occupational health hazards and the roles of the occupational health nurse.' },
            { code: 'NSC 314', title: 'Research Methodology & Biostatistics', credits: 2, description: 'Research designs, sampling methods, data collection instruments, basic biostatistics, ethical approval process, and research proposal writing.', studyNotes: 'Study research designs: descriptive, cross-sectional, case-control, cohort, experimental. Understand sampling techniques: simple random, stratified, cluster, purposive. Learn data collection methods: questionnaires, interviews, focus groups. Study basic statistics: measures of central tendency (mean, median, mode), measures of dispersion (SD, range), tests of significance (chi-square, t-test).' },
            { code: 'NSC 315', title: 'Principles of Nursing Education', credits: 2, description: 'Teaching and learning theories, curriculum development, lesson planning, clinical teaching methods, and student evaluation.', studyNotes: 'Understand educational theories: behaviourism (Skinner), cognitivism (Piaget), constructivism (Vygotsky), and their application to nursing education. Learn curriculum development models. Study clinical teaching methods: bedside teaching, nursing rounds, case presentations, simulation. Understand student evaluation methods (formative and summative).' },
            { code: 'PHA 311', title: 'Pharmacology for Nurses III', credits: 2, description: 'Psychotropic drugs, paediatric pharmacology, antiretroviral therapy, anti-tuberculosis drugs, and drug interactions in special populations.', studyNotes: 'Study psychotropic drugs: antipsychotics (typical vs atypical), antidepressants (SSRIs, SNRIs, TCAs, MAOIs), mood stabilisers (lithium, valproate), anxiolytics. Learn paediatric pharmacology: weight-based dosing, age-related pharmacokinetic differences. Study ARV drugs: NRTIs, NNRTIs, PIs, integrase inhibitors. Anti-TB drugs: rifampicin, INH, pyrazinamide, ethambutol and their side effects (hepatotoxicity, peripheral neuropathy, optic neuritis).' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'NSC 316', title: 'Paediatric Nursing II', credits: 3, description: 'Infectious childhood diseases (polio, measles, tetanus, diphtheria, whooping cough), malnutrition management (kwashiorkor, marasmus), Expanded Programme on Immunization, and child health advocacy.', studyNotes: 'Study EPI target diseases: tuberculosis, poliomyelitis, diphtheria, pertussis, tetanus, hepatitis B, Haemophilus influenzae type b, measles, yellow fever. Malnutrition: distinguish kwashiorkor (oedematous) from marasmus (wasting), management protocols (F-75, F-100, therapeutic feeds). Understand child health advocacy: breastfeeding promotion, vitamin A supplementation, deworming.' },
            { code: 'NSC 317', title: 'Mental Health & Psychiatric Nursing II', credits: 3, description: 'Substance abuse and addiction nursing, forensic psychiatry, community mental health services, psychosocial rehabilitation, and suicide prevention.', studyNotes: 'Study substance abuse: alcohol, cannabis, opioids, stimulants. Understand addiction as a brain disease, withdrawal syndromes, and rehabilitation approaches. Learn forensic psychiatry: the mentally ill offender, criminal responsibility, competency to stand trial. Study community mental health: deinstitutionalisation, day care centres, halfway homes. Learn suicide risk assessment and prevention strategies.' },
            { code: 'NSC 318', title: 'Ophthalmic Nursing', credits: 2, description: 'Eye assessment and vision testing, common eye conditions in Nigeria (cataract, glaucoma, trachoma, conjunctivitis), eye care procedures, and health education for visual health.', studyNotes: 'Study common eye conditions in Nigeria: cataract (most common cause of blindness), glaucoma (silent thief of sight), trachoma (leading infectious cause of blindness), conjunctivitis (viral, bacterial, allergic). Learn vision testing: Snellen chart, visual field testing, tonometry. Eye care procedures: eye irrigation, eye drop instillation, eye patching.' },
            { code: 'NSC 319', title: 'Ear, Nose & Throat (ENT) Nursing', credits: 2, description: 'ENT assessment, common ENT conditions (otitis media, sinusitis, tonsillitis, hearing loss), ENT procedures, and nursing care.', studyNotes: 'Study common ENT conditions: otitis media (acute, chronic suppurative, serous), sinusitis (maxillary, frontal, ethmoid, sphenoid), tonsillitis (acute, recurrent, peritonsillar abscess), hearing loss (conductive, sensorineural, mixed). Learn ENT nursing care: preoperative and postoperative care for tonsillectomy, mastoidectomy, tracheostomy care.' },
            { code: 'NSC 320', title: 'Accident & Emergency Nursing', credits: 3, description: 'Triage systems, emergency assessment, trauma nursing, cardiac life support (BLS/ACLS), poisoning management, burns management, and disaster response.', studyNotes: 'Master triage systems: South African Triage Scale (SATS), Manchester Triage System. Study BLS (CAB: chest compressions, airway, breathing) and ACLS algorithms (VF/VT, PEA, asystole). Learn burns assessment (rule of nines, Parkland formula for fluid resuscitation). Poisoning management: activated charcoal, gastric lavage, specific antidotes. Disaster triage: colour codes (red, yellow, green, black).' },
            { code: 'NSC 321', title: 'Nursing Research Project I', credits: 2, description: 'Research topic selection, literature review, research proposal development, and ethical approval application.', studyNotes: 'Learn how to select a research topic (relevant, feasible, original, ethical). Conduct a literature review: identify gaps in knowledge, use appropriate databases, reference management. Write a research proposal: introduction, problem statement, objectives, methodology, ethical considerations, timeline, budget. Apply for ethical approval from institutional review board.' },
          ],
        }],
        keyTopics: ['Paediatric nursing care', 'Mental health & psychiatric nursing', 'Emergency triage and trauma care', 'Ophthalmic & ENT nursing', 'Substance abuse nursing', 'Research proposal writing'],
        clinicalRotation: ['Paediatric ward (children\'s emergency, nursery/SCBU)', 'Psychiatric unit', 'Accident & Emergency department', 'Eye and ENT clinics', 'Community health outreach'],
        skillsToMaster: ['Paediatric assessment and resuscitation (ETAT)', 'Mental status examination (MSE)', 'Triage in emergency settings', 'Basic and advanced life support (BLS/ACLS)', 'Eye examination and irrigation techniques', 'Restraint and de-escalation techniques', 'Paediatric drug dosage calculations'],
        nmcnRelevance: 'Paediatric Nursing, Mental Health, and Emergency Nursing are major NMCN exam domains. Expect case-study-based questions. Practice past NMCN questions extensively.',
        studyHoursTarget: 250,
        studyObjectives: [
          'Assess and manage common paediatric conditions using the IMCI approach',
          'Perform mental status examination and identify major psychiatric disorders',
          'Apply triage principles and manage emergency situations appropriately',
          'Demonstrate competence in basic and advanced life support',
          'Develop a research proposal on a relevant nursing topic',
          'Provide nursing care for patients with ophthalmic and ENT conditions',
        ],
        recommendedTextbooks: ['Wong\'s Nursing Care of Infants and Children', 'Townsend - Psychiatric Mental Health Nursing', 'Merson - Global Health (for Community Health)', 'Rosh Review - Emergency Nursing', 'Polit & Beck - Nursing Research', 'NMCN - Specialty Nursing Curricula'],
      },
      '4': {
        title: '400 Level - Leadership, Research & Comprehensive Practice',
        description: 'Advanced nursing practice, leadership, critical care, public health, research completion, and full clinical internship preparing for NMCN licensing.',
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'NSC 411', title: 'Critical Care Nursing', credits: 3, description: 'ICU nursing, haemodynamic monitoring, mechanical ventilation, advanced cardiac life support, sepsis management, and multiple organ dysfunction syndrome.', studyNotes: 'Study haemodynamic monitoring: CVP, arterial blood pressure, pulmonary artery pressure. Learn mechanical ventilation modes: volume-controlled, pressure-controlled, SIMV, CPAP. Understand sepsis definitions (SIRS, sepsis, severe sepsis, septic shock) and the Sepsis Six care bundle. Study MODS (multiple organ dysfunction syndrome) and nursing management.' },
            { code: 'NSC 412', title: 'Nursing Leadership & Administration', credits: 3, description: 'Nursing management theories, healthcare financing, nursing service administration, staff scheduling, conflict resolution, and quality assurance.', studyNotes: 'Study management theories applicable to nursing: scientific management (Taylor), bureaucratic management (Weber), human relations (Mayo). Understand budgeting in nursing: capital budget, operating budget, zero-based budgeting. Learn staffing methodologies: patient classification systems, nursing hours per patient day (NHPPD). Study conflict resolution styles: collaborating, compromising, competing, accommodating, avoiding.' },
            { code: 'NSC 413', title: 'Public Health Nursing', credits: 3, description: 'Public health policies in Nigeria, disease surveillance and notification, epidemic investigation, health programme planning and evaluation.', studyNotes: 'Study the National Disease Surveillance and Notification system (IDSR). Understand epidemic investigation steps: confirm outbreak, case definition, line listing, descriptive epidemiology, hypothesis testing, control measures. Learn health programme planning models: PRECEDE-PROCEED, logical framework approach. Study monitoring and evaluation: indicators, data sources, program evaluation methods.' },
            { code: 'NSC 414', title: 'Nursing Ethics & Jurisprudence', credits: 2, description: 'NMCN code of ethics, legal aspects of nursing practice in Nigeria, patient rights, informed consent, negligence, and professional discipline.', studyNotes: 'Study the NMCN Code of Ethics for nurses in Nigeria. Understand legal concepts: tort, negligence/malpractice, assault, battery, false imprisonment, informed consent, confidentiality. Learn the professional disciplinary process: investigation, professional conduct committee hearings, sanctions. Study patient rights: right to information, right to refuse treatment, right to privacy.' },
            { code: 'NSC 415', title: 'Nursing Research Project II', credits: 4, description: 'Data collection, statistical analysis, research report writing, discussion of findings, recommendations, and oral defence.', studyNotes: 'Learn quantitative data analysis using SPSS (or similar): descriptive statistics, chi-square, t-test, correlation, regression. Study qualitative data analysis: thematic analysis, content analysis. Write research report chapters: introduction, literature review, methodology, results, discussion, conclusion, recommendations. Prepare for oral defence: anticipate questions, create presentation slides.' },
            { code: 'NSC 416', title: 'Reproductive & Family Health Nursing', credits: 2, description: 'Family planning methods, STI/HIV management, adolescent reproductive health, gender-based violence, and reproductive health rights.', studyNotes: 'Study family planning methods: hormonal (combined oral, injectable, implants, IUDs), barrier (male/female condoms), natural (rhythm, withdrawal), permanent (BTL, vasectomy). Learn STI syndromic management approach (vaginal discharge, urethral discharge, genital ulcer). Study HIV: prevention (PrEP, PEP), PMTCT, ART. Understand gender-based violence: screening, documentation, referral.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'NSC 417', title: 'Clinical Internship (All Departments)', credits: 6, description: 'Supervised clinical practice rotating through medical, surgical, paediatric, obstetrics/gynaecology, psychiatric, A&E, and community departments.', studyNotes: 'This is the final clinical integration. Focus on: independent patient care planning and implementation, prioritisation and time management, interprofessional collaboration, documentation and handover practices, infection prevention compliance. Maintain a reflective portfolio/diary of clinical experiences.' },
            { code: 'NSC 418', title: 'Community Health Nursing Practicum', credits: 4, description: 'Comprehensive community health field experience: home visits, school health, occupational health, community diagnosis, and outreach services.', studyNotes: 'Conduct community health needs assessment using surveys, focus groups, and observation. Plan and implement a community health intervention based on identified needs. Practice home visiting: preparation, family assessment, health education, referral. Conduct school health programme: health screening, health instruction, environmental inspection.' },
            { code: 'NSC 419', title: 'Comprehensive Nursing Review', credits: 3, description: 'Integrated revision of all nursing subjects, NMCN exam preparation, mock examinations, case study analysis, and exam-taking strategies.', studyNotes: 'This course covers the entire nursing curriculum in preparation for the NMCN licensing exam. Focus on: Medical-Surgical Nursing (40% of exam), Paediatric Nursing (15%), Mental Health (10%), Community Health (10%), Obstetrics/Gynaecology (10%), Pharmacology (10%), Professional Ethics (5%). Practice with past NMCN questions and simulated exams.' },
            { code: 'GST 411', title: 'Peace, Conflict Resolution & Human Rights', credits: 2, description: 'Conflict resolution theories, human rights in healthcare, patient advocacy, and peacebuilding in multicultural healthcare settings.', studyNotes: 'Study conflict resolution strategies in healthcare settings: negotiation, mediation, arbitration. Understand human rights principles as they apply to healthcare: right to health, non-discrimination, participation. Study patient advocacy: speaking up for patient rights, informed consent, end-of-life decisions. Learn cultural competence in conflict resolution.' },
          ],
        }],
        keyTopics: ['Critical care and ICU nursing', 'Nursing leadership & administration', 'Public health & disease surveillance', 'Nursing ethics and legal accountability', 'Research defence and dissemination', 'NMCN exam preparation strategy'],
        clinicalRotation: ['Intensive Care Unit (ICU)/CCU', 'Nursing administration office', 'Comprehensive clinical internship (all wards)', 'Community health centre independent practice', 'NMCN exam clinical simulation'],
        skillsToMaster: ['Advanced Life Support (ALS) and resuscitation team leadership', 'Ventilator care and monitoring', 'Nursing care planning and critical pathways', 'Incident reporting and root cause analysis', 'Health programme planning and evaluation', 'Supervision and delegation of nursing tasks', 'NMCN objective and case-study exam technique'],
        nmcnRelevance: 'Final year is the most critical for NMCN exam success. Comprehensive review course covers all exam domains. Practice integrated case studies, past NMCN questions, and clinical simulations.',
        studyHoursTarget: 300,
        studyObjectives: [
          'Manage critically ill patients in the ICU setting with advanced monitoring and ventilation support',
          'Apply leadership and management principles in nursing service administration',
          'Conduct epidemiological investigations and plan community health interventions',
          'Demonstrate understanding of legal and ethical dimensions of nursing practice in Nigeria',
          'Complete and defend a research project on a relevant nursing topic',
          'Prepare comprehensively for the NMCN licensing examination through integrated review',
        ],
        recommendedTextbooks: ['Urden - Critical Care Nursing: Diagnosis and Management', 'Marquis & Huston - Leadership Roles and Management Functions', 'Last - Public Health and Epidemiology', 'Burkhardt & Nathaniel - Ethics in Nursing', 'NMCN - Past Questions and Study Guide', 'Nies & McEwen - Community/Public Health Nursing'],
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
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'NSG 101', title: 'Anatomy & Physiology I', credits: 3, description: 'Structure and functions of cells, tissues, musculoskeletal system, nervous system, and special senses.', studyNotes: 'Focus on cell structure and organelles, tissue types (epithelial, connective, muscle, nervous), musculoskeletal anatomy (bones, joints, muscles), and nervous system organisation (CNS, PNS, autonomic).' },
            { code: 'NSG 102', title: 'Fundamentals of Nursing I', credits: 3, description: 'History of nursing, roles of the nurse, ethical principles, hospital admission/discharge procedures, and basic patient care.', studyNotes: 'Study the historical development of nursing in Nigeria (early mission hospitals, first school of nursing). Understand the nursing process (assessment, diagnosis, planning, implementation, evaluation). Learn admission and discharge procedures legal requirements.' },
            { code: 'NSG 103', title: 'Microbiology & Parasitology', credits: 2, description: 'Medically important microorganisms, infection cycle, sterilisation and disinfection, and basic immunology.', studyNotes: 'Focus on pathogenic organisms common in Nigeria. Understand the chain of infection and methods of breaking it. Study sterilisation methods (autoclaving, dry heat, chemical) and disinfection levels.' },
            { code: 'NSG 104', title: 'Psychology for Nurses', credits: 2, description: 'Human development stages, learning theories, attention and perception, memory, motivation, and mental health basics.', studyNotes: 'Study developmental theories (Freud, Erikson, Piaget). Understand defence mechanisms (denial, projection, rationalisation, displacement). Learn about perception, memory processes, and motivation theories.' },
            { code: 'NSG 105', title: 'Introduction to Community Health', credits: 2, description: 'Definition of health, community health concepts, Primary Health Care (PHC) elements, and health indicators.', studyNotes: 'Understand the WHO definition of health. Study the eight elements of PHC. Learn common health indicators: maternal mortality ratio (MMR), infant mortality rate (IMR), under-5 mortality rate (U5MR).' },
            { code: 'GNS 101', title: 'English & Professional Communication', credits: 2, description: 'Oral and written communication, report writing, patient interviewing, and documentation skills.', studyNotes: 'Practice professional writing standards for nursing documentation. Learn interviewing techniques for patient history taking. Study report writing formats used in nursing.' },
            { code: 'GNS 102', title: 'Sociology for Nurses', credits: 2, description: 'Social structures, culture, family dynamics, social determinants of health, and community social organisation.', studyNotes: 'Understand the relationship between social factors and health outcomes in Nigeria. Study family types (nuclear, extended) and their influence on health. Learn about culture-bound syndromes and traditional health practices.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'NSG 106', title: 'Anatomy & Physiology II', credits: 3, description: 'Cardiovascular system, respiratory system, digestive system, urinary system, endocrine system, and reproductive system.', studyNotes: 'Study the heart structure, cardiac cycle, blood vessels, and circulation. Understand respiratory mechanics and gas exchange. Learn digestive processes from mouth to anus. Study kidney structure and urine formation. Learn endocrine glands and their hormones.' },
            { code: 'NSG 107', title: 'Fundamentals of Nursing II', credits: 3, description: 'Vital signs measurement and interpretation, hygiene care, mobility and positioning, rest and sleep, safety measures, and documentation.', studyNotes: 'Master vital signs: normal ranges, factors affecting vital signs, correct measurement techniques. Learn patient hygiene care: bed bath, oral care, perineal care. Study patient positioning (Fowler\'s, supine, prone, lateral, Trendelenburg). Understand fall prevention and safety measures in healthcare settings.' },
            { code: 'NSG 108', title: 'Pharmacology for Nurses I', credits: 2, description: 'General principles of drug administration, routes of administration, dosage calculations, legal aspects of drug control in Nigeria.', studyNotes: 'Master the six rights of medication administration. Learn dosage calculations (tablets, liquids, injections, IV infusions). Study drug routes: oral, sublingual, topical, inhalation, injection (ID, SC, IM, IV). Understand NAFDAC and PCN roles in drug regulation.' },
            { code: 'NSG 109', title: 'Nutrition & Dietetics', credits: 2, description: 'Basic nutrients, balanced diet, therapeutic diets, malnutrition in Nigeria, and dietary counseling.', studyNotes: 'Understand the six classes of nutrients and their functions. Study common nutritional deficiencies in Nigeria: iron deficiency anaemia, vitamin A deficiency, iodine deficiency disorders. Learn therapeutic diets: diabetic, low-sodium, high-protein, renal.' },
            { code: 'NSG 110', title: 'Community Health Practice I', credits: 2, description: 'Family health services, school health programme, environmental health (water, sanitation, waste disposal), and home visiting.', studyNotes: 'Learn the components of family health services. Study school health programme components: health appraisal, health instruction, healthful school environment. Understand environmental health: water purification methods, excreta disposal, refuse disposal, food hygiene.' },
            { code: 'GNS 103', title: 'Computer & Information Technology', credits: 2, description: 'Basic computer skills, health information systems, electronic documentation, and data management.', studyNotes: 'Learn basic computer operations, Microsoft Office applications. Understand health information systems and electronic medical records. Practice data entry and basic data management for health statistics.' },
          ],
        }],
        keyTopics: ['Human anatomy and physiology', 'Fundamentals of nursing', 'Pharmacology and drug calculations', 'Microbiology and infection control', 'Community health and PHC', 'Therapeutic nutrition'],
        clinicalRotation: ['Nursing skills laboratory', 'General ward observation', 'Community health centre observation'],
        skillsToMaster: ['Vital signs measurement (temperature, pulse, respiration, BP)', 'Hand washing/hand hygiene technique', 'Bed making (occupied, unoccupied, post-operative)', 'Patient positioning for comfort and procedures', 'Aseptic technique and sterile gloving', 'Admission and discharge procedures', 'Documentation and charting'],
        nmcnRelevance: 'Anatomy & Physiology and Fundamentals of Nursing are core NMCN exam subjects. Study body systems and basic nursing procedures thoroughly.',
        studyHoursTarget: 130,
        studyObjectives: [
          'Describe the structure and functions of all major body systems',
          'Demonstrate correct vital signs measurement and documentation',
          'Apply infection prevention principles in patient care',
          'Perform basic nursing procedures safely and effectively',
          'Explain the principles of drug administration and dosage calculations',
          'Understand the role of community health and PHC in Nigeria',
        ],
        recommendedTextbooks: ['Pearce - Anatomy and Physiology for Nurses', 'Kozier & Erb - Fundamentals of Nursing', 'Torrance & Serginson - Drug Calculations for Nurses', 'Davey - Microbiology for Nurses', 'NMCN - Diploma Nursing Curriculum'],
      },
      '2': {
        title: 'Second Year - Clinical Nursing Practice',
        description: 'Introduction to medical-surgical nursing, paediatric nursing, maternal care, and expanded community health practice.',
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'NSG 201', title: 'Medical-Surgical Nursing I', credits: 4, description: 'Perioperative nursing care, wound management, fluid and electrolyte balance, shock management, and nursing care of patients with common medical conditions.', studyNotes: 'Master perioperative nursing: pre-operative assessment and preparation, intra-operative nursing roles (scrub, circulating), post-operative care and complications. Study wound healing by primary and secondary intention, wound assessment, dressing techniques. Understand types of shock (hypovolaemic, cardiogenic, septic, anaphylactic, neurogenic) and management.' },
            { code: 'NSG 202', title: 'Pharmacology for Nurses II', credits: 2, description: 'Systemic pharmacology: antibiotics, antimalarials, analgesics, antihypertensives, antidiabetics, and drug interactions.', studyNotes: 'Study major antibiotic classes and their spectra of activity. Understand antimalarial drugs: ACTs (artemether-lumefantrine, artesunate-amodiaquine), quinine, chloroquine. Learn analgesic ladder (WHO): non-opioids, weak opioids, strong opioids. Study antihypertensive and antidiabetic drug classes and nursing considerations.' },
            { code: 'NSG 203', title: 'Community Health Nursing II', credits: 2, description: 'Expanded Programme on Immunization (EPI), maternal and child health services, disease surveillance and notification, and school health.', studyNotes: 'Memorise the Nigerian EPI schedule. Understand cold chain management: vaccine storage temperatures, cold chain equipment (refrigerators, cold boxes, vaccine carriers). Study disease surveillance: integrated disease surveillance and response (IDSR), notifiable diseases in Nigeria.' },
            { code: 'NSG 204', title: 'Paediatric Nursing I', credits: 3, description: 'Growth and development, common childhood conditions (malaria, pneumonia, diarrhoea, measles), immunisation, and paediatric nursing procedures.', studyNotes: 'Learn the IMCI approach to childhood illness. Study classification of dehydration (no signs, some, severe) and management (Plan A, B, C). Understand childhood malaria: uncomplicated vs severe (cerebral malaria, severe anaemia). Study pneumonia classification (non-severe, severe, very severe) and treatment.' },
            { code: 'NSG 205', title: 'Community Nutrition', credits: 2, description: 'Nutritional assessment methods, maternal and child nutrition, food security, and nutrition intervention programmes in Nigeria.', studyNotes: 'Learn anthropometric measurements (weight, height, MUAC, head circumference). Understand growth chart interpretation. Study nutrition intervention programmes: vitamin A supplementation, iron-folate supplementation, therapeutic feeding programmes. Understand food security dimensions: availability, access, utilisation, stability.' },
            { code: 'NSG 206', title: 'First Aid & Emergency Care', credits: 2, description: 'Basic first aid principles, wound care, fractures and splinting, poisoning, burns, shock, and emergency transportation.', studyNotes: 'Master the DRABC (Danger, Response, Airway, Breathing, Circulation) approach. Learn fracture immobilisation principles and splinting techniques. Study poisoning management: gastrointestinal decontamination, activated charcoal, specific antidotes. Understand burns assessment and first aid: cooling, cover, referral.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'NSG 207', title: 'Medical-Surgical Nursing II', credits: 4, description: 'Nursing management of patients with cardiovascular disorders (hypertension, CVA, heart failure), respiratory disorders (asthma, TB, pneumonia), GI disorders (peptic ulcer, hepatitis), and renal disorders.', studyNotes: 'Study CVA (stroke): ischaemic vs haemorrhagic, nursing care (positioning, aspiration prevention, range of motion exercises). TB nursing: directly observed therapy (DOT), infection control, monitoring for drug side effects (hepatotoxicity from INH, red urine from rifampicin). Peptic ulcer: H. pylori eradication triple therapy.' },
            { code: 'NSG 208', title: 'Paediatric Nursing II', credits: 3, description: 'Neonatal care, preterm and low birth weight care, common neonatal conditions, child with special needs, and paediatric emergency care.', studyNotes: 'Study essential newborn care: immediate care at birth, APGAR scoring, cord care, thermoregulation, eye care, Vitamin K administration. Learn care of preterm/LBW infants: kangaroo mother care (KMC), Incubator care, feeding challenges. Common neonatal conditions: neonatal jaundice, neonatal sepsis, birth asphyxia, congenital anomalies.' },
            { code: 'NSG 209', title: 'Maternal & Child Health Nursing', credits: 3, description: 'Antenatal care, normal labour and delivery, postnatal care, family planning methods, and breast feeding support.', studyNotes: 'Study antenatal care schedule (booking, subsequent visits), focused antenatal care (FANC) approach. Understand the stages of labour and partograph use. Learn the active management of third stage of labour (AMTSL). Study family planning methods: mechanism of action, efficacy, side effects, contraindications.' },
            { code: 'NSG 210', title: 'Introduction to Nursing Research', credits: 2, description: 'Research process overview, simple research designs, data collection methods, and evidence-based nursing practice.', studyNotes: 'Understand the steps of the research process. Learn simple research designs: descriptive, cross-sectional, comparative. Practice data collection using questionnaires and interviews. Understand evidence-based practice: forming clinical questions (PICO format), finding and appraising evidence.' },
            { code: 'NSG 211', title: 'Health Education & Promotion', credits: 2, description: 'Teaching and learning principles, lesson plan development, health talk delivery, and patient education materials.', studyNotes: 'Learn how to plan a health education session: needs assessment, setting objectives, selecting content and methods. Practice delivering health talks on common health topics (malaria prevention, immunisation, nutrition, family planning). Develop patient education materials (leaflets, posters) suitable for Nigerian audiences.' },
          ],
        }],
        keyTopics: ['Medical-surgical nursing (cardio, respiratory, GI, renal)', 'Paediatric nursing and child health', 'Maternal and child health', 'Immunisation (Nigeria EPI schedule)', 'Family planning methods', 'First aid and emergency management'],
        clinicalRotation: ['Medical wards', 'Surgical wards', 'Paediatric ward', 'Maternity unit (antenatal, labour, postnatal)', 'Immunisation clinic', 'Outpatient department'],
        skillsToMaster: ['Wound assessment and dressing technique', 'IV cannulation and infusion therapy', 'Intramuscular and subcutaneous injection technique', 'Paediatric assessment and drug dosage calculation', 'Partograph plotting and monitoring', 'Episiotomy care and perineal hygiene', 'Breastfeeding support and counseling', 'Catheterisation (male and female)'],
        nmcnRelevance: 'Medical-Surgical Nursing is the largest domain of the NMCN RN exam. Paediatric and Maternal-Child Health are also heavily tested.',
        studyHoursTarget: 200,
        studyObjectives: [
          'Assess and plan nursing care for patients with common medical-surgical conditions',
          'Administer medications safely across various drug classes',
          'Provide comprehensive paediatric nursing care using IMCI guidelines',
          'Deliver antenatal, intrapartum, and postnatal nursing care',
          'Provide family planning services and client education',
          'Apply first aid principles in emergency situations',
        ],
        recommendedTextbooks: ['Brunner & Suddarth - Medical-Surgical Nursing', 'WHO - IMCI Chart Booklet', 'Myles - Textbook for Midwives', 'NMCN - EPI Guidelines and Immunisation Schedule', 'First Aid Manual (St John Ambulance/Red Cross)'],
      },
      '3': {
        title: 'Third Year - Comprehensive Nursing & Licensing Preparation',
        description: 'Advanced nursing care, mental health, leadership, and intensive NMCN exam preparation with clinical internship.',
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'NSG 301', title: 'Medical-Surgical Nursing III', credits: 3, description: 'Nursing management of patients with neurological disorders, endocrine disorders, musculoskeletal conditions, burns, and HIV/AIDS.', studyNotes: 'Study neurological nursing: increased ICP, head injuries, spinal cord injuries, meningitis, epilepsy. Endocrine: diabetes mellitus (DKA, HHS, hypoglycaemia), thyroid disorders. Burns: assessment (rule of nines), fluid resuscitation (Parkland/Baxter formula), wound care, infection prevention. HIV/AIDS: clinical staging, ART, opportunistic infections, PMTCT.' },
            { code: 'NSG 302', title: 'Mental Health & Psychiatric Nursing', credits: 3, description: 'Therapeutic communication techniques, common psychiatric illnesses (schizophrenia, depression, bipolar, anxiety disorders), psychotropic medications, and Nigerian mental health legislation.', studyNotes: 'Master the mental status examination (MSE): appearance, behaviour, speech, mood, affect, thought content, perception, cognition, insight, judgement. Study schizophrenia: positive symptoms (hallucinations, delusions, disorganised speech) and negative symptoms (avolition, alogia, flat affect). Depression: SIGECAPS mnemonic for diagnosis. Mania: DIGFAST mnemonic.' },
            { code: 'NSG 303', title: 'Community Health Nursing III', credits: 2, description: 'Rural health, nomadic health, occupational health, disaster nursing, community diagnosis, and healthcare referral system.', studyNotes: 'Understand the unique health challenges of rural and nomadic populations in Nigeria. Study occupational health: hazard identification, risk assessment, health surveillance, workplace health promotion. Learn disaster nursing: disaster classification, disaster management cycle, triage in mass casualty incidents.' },
            { code: 'NSG 304', title: 'Accident & Emergency Nursing', credits: 2, description: 'Triage, emergency assessment and management, trauma care, BLS/ACLS, poisoning, and disaster nursing.', studyNotes: 'Master the primary survey (ABCDE) and secondary survey. Study trauma nursing: blunt vs penetrating trauma, head injury assessment (Glasgow Coma Scale), chest trauma (tension pneumothorax, haemothorax, flail chest), abdominal trauma, musculoskeletal trauma. Learn BLS algorithms for adults, children, and infants.' },
            { code: 'NSG 305', title: 'Nursing Leadership & Management', credits: 2, description: 'Nursing service organisation, staffing and scheduling, resource management, supervision, and quality assurance.', studyNotes: 'Understand different nursing care delivery models: total patient care, functional nursing, team nursing, primary nursing. Learn staffing and scheduling methods. Study quality assurance: standards setting, monitoring, evaluation, continuous quality improvement. Understand the role of the nurse manager in resource allocation.' },
            { code: 'NSG 306', title: 'Nursing Research & Project', credits: 2, description: 'Simple research project conduct, data analysis, report writing, and presentation of findings.', studyNotes: 'Carry out a simple research project under supervision. Learn to code, enter, and analyse data (using Excel, SPSS, or manual methods). Write a research report following the standard format. Present findings to supervisors and peers.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'NSG 307', title: 'Nursing Ethics & Professional Practice', credits: 2, description: 'NMCN code of conduct, professional discipline, legal aspects of nursing, patient rights, informed consent, and accountability.', studyNotes: 'Study the NMCN Code of Professional Conduct in detail. Understand the disciplinary process: petitions, professional conduct committee hearings, appeals. Learn legal concepts relevant to nursing: negligence, malpractice, vicarious liability, informed consent, documentation as legal evidence.' },
            { code: 'NSG 308', title: 'Comprehensive Clinical Internship', credits: 6, description: 'Supervised clinical practice across all major departments: medical, surgical, paediatrics, obstetrics, psychiatry, A&E, and community.', studyNotes: 'This is the final practical integration. Focus on: building confidence in independent practice, developing clinical judgment, improving time management and prioritisation, enhancing communication with patients and the healthcare team. Maintain a logbook of clinical experiences as required by NMCN.' },
            { code: 'NSG 309', title: 'Community Health Practicum', credits: 3, description: 'Independent community health practice: home visits, health education, immunisation outreach, school health, and community mobilisation.', studyNotes: 'Plan and conduct home visits independently. Organise immunisation outreach sessions. Conduct school health programmes: health screening, health instruction, environmental sanitation inspection. Mobilise community members for health activities.' },
            { code: 'NSG 310', title: 'NMCN Exam Preparation & Comprehensive Review', credits: 3, description: 'Systematic revision of all subjects, mock NMCN examinations, case study discussions, and exam-taking strategies.', studyNotes: 'RN exam structure: 300 multiple-choice questions (Medical-Surgical 40%, Paediatrics 15%, Community Health 10%, Mental Health 10%, Obstetrics 10%, Pharmacology 10%, Ethics 5%). Practice with past questions. Study case study format questions. Learn exam strategies: time management, question analysis, elimination technique.' },
          ],
        }],
        keyTopics: ['Advanced medical-surgical nursing', 'Mental health & psychiatric nursing', 'Emergency nursing and triage', 'Nursing leadership and ethics', 'Community health management', 'NMCN exam preparation'],
        clinicalRotation: ['Psychiatric unit', 'Accident & Emergency department', 'All departments (comprehensive internship)', 'Community health centre (independent practice)', 'NMCN clinical examination practice'],
        skillsToMaster: ['Mental status examination (MSE)', 'Triage assessment and prioritisation', 'Basic and advanced life support', 'Team leadership and delegation', 'Emergency obstetric care (basic)', 'Incident reporting and risk management', 'NMCN exam technique (objective and practical)'],
        nmcnRelevance: 'This year is entirely focused on NMCN RN licensing exam preparation. The exam covers all subjects with emphasis on medical-surgical nursing.',
        studyHoursTarget: 280,
        studyObjectives: [
          'Provide comprehensive nursing care for patients with complex medical-surgical conditions',
          'Perform mental status examination and manage common psychiatric conditions',
          'Demonstrate competence in emergency nursing and life support',
          'Apply leadership and management principles in nursing practice',
          'Understand legal and ethical dimensions of professional nursing',
          'Prepare thoroughly for the NMCN RN licensing examination',
        ],
        recommendedTextbooks: ['Brunner & Suddarth - Medical-Surgical Nursing', 'Townsend - Psychiatric Mental Health Nursing', 'Sheehy\'s Emergency Nursing', 'NMCN Past Questions and Answers', 'Nies & McEwen - Community/Public Health Nursing'],
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
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'MDW 101', title: 'Reproductive Anatomy & Physiology', credits: 3, description: 'Female and male reproductive systems, menstrual cycle, fertilisation and implantation, placental development, and endocrinology of pregnancy.', studyNotes: 'Study the female reproductive anatomy in detail: ovaries, fallopian tubes, uterus (layers: endometrium, myometrium, perimetrium), cervix, vagina, external genitalia. Understand the menstrual cycle: ovarian cycle (follicular, ovulation, luteal) and endometrial cycle (proliferative, secretory, menstrual). Learn fertilisation and implantation process, placental development and functions.' },
            { code: 'MDW 102', title: 'Antenatal Care', credits: 3, description: 'Booking history and examination, antenatal assessment (Leopold maneuvers), risk screening, tetanus toxoid immunisation, and health education in pregnancy.', studyNotes: 'Learn the focused antenatal care (FANC) approach: booking visit (comprehensive history, physical examination, investigations), return visits schedule. Master Leopold maneuvers (four steps) for determining fetal lie, presentation, position, and engagement. Study risk screening: identify high-risk pregnancies (ANAEMIC mnemonic).' },
            { code: 'MDW 103', title: 'Pharmacology for Midwives', credits: 2, description: 'Drugs used in pregnancy (oxytocics, tocolytics, antihypertensives), analgesics in labour, magnesium sulphate, and safe drug administration.', studyNotes: 'Study oxytocic drugs: oxytocin (Syntocinon), ergometrine, misoprostol - indications, doses, routes, side effects. Learn tocolytic drugs: salbutamol, nifedipine, magnesium sulphate - for preterm labour management. Understand antihypertensives in pregnancy: methyldopa, nifedipine, labetalol. Study magnesium sulphate: loading dose, maintenance, monitoring (reflexes, RR, urine output), toxicity management (calcium gluconate as antidote).' },
            { code: 'MDW 104', title: 'Family Planning & Reproductive Health', credits: 2, description: 'Contraceptive methods (hormonal, barrier, IUD, implants, sterilisation), counseling techniques, service delivery, and adolescent reproductive health.', studyNotes: 'Study all contraceptive methods with mechanisms of action, efficacy, side effects, and contraindications. Understand the World Health Organization Medical Eligibility Criteria (WHO MEC) for contraceptive use. Learn family planning counseling: GATHER framework (Greet, Ask, Tell, Help, Explain, Return).' },
            { code: 'MDW 105', title: 'Maternal Nutrition', credits: 2, description: 'Nutrition in pregnancy, iron and folic acid supplementation, micronutrients, dietary counseling, and lactation nutrition.', studyNotes: 'Understand increased nutritional requirements during pregnancy: calories, protein, iron, folate, calcium, iodine, zinc. Study iron and folic acid supplementation schedule. Learn about common nutritional problems in pregnancy: anaemia, hyperemesis gravidarum, gestational diabetes dietary management.' },
            { code: 'GMD 101', title: 'Communication & Counselling Skills', credits: 2, description: 'Interpersonal communication, patient-centred counseling, breaking bad news, health education techniques, and cultural sensitivity.', studyNotes: 'Learn effective communication techniques: active listening, open-ended questions, empathy, non-verbal communication. Practice counseling for: HIV testing and PMTCT, family planning, breastfeeding, and breaking bad news (stillbirth, congenital anomalies). Understand cultural sensitivity in maternal health.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'MDW 106', title: 'Normal Labour & Delivery', credits: 4, description: 'Mechanism of normal labour, stages of labour, partograph use and interpretation, delivery techniques (vertex, breech), perineal care and repair.', studyNotes: 'Study the four stages of labour. Understand the mechanisms of labour (cardinal movements): engagement, descent, flexion, internal rotation, extension, external rotation, expulsion. Master the partograph: latent phase (active phase after 4cm), alert line, action line. Learn episiotomy: indications, types (mediolateral, median), technique, repair.' },
            { code: 'MDW 107', title: 'Postnatal Care', credits: 3, description: 'Immediate and late postnatal care, uterine involution, lochia assessment, perineal wound care, postnatal exercises, and family planning initiation.', studyNotes: 'Monitor the postnatal mother: vital signs, uterine involution (fundal height measurement), lochia (rubra, serosa, alba), perineal wound healing, breast examination. Teach postnatal exercises. Initiate family planning before discharge. Provide breastfeeding support. Recognise postnatal danger signs: fever, heavy bleeding, severe headache, abdominal pain, wound discharge.' },
            { code: 'MDW 108', title: 'Neonatal Care I (Normal Newborn)', credits: 3, description: 'Immediate newborn care, APGAR scoring, thermoregulation, cord care, eye care, Vitamin K administration, breastfeeding initiation, and newborn assessment.', studyNotes: 'Learn immediate newborn care: clearing airway, drying, skin-to-skin contact, cord clamping (delayed). APGAR scoring at 1 and 5 minutes (Appearance, Pulse, Grimace, Activity, Respiration). Study thermoregulation: prevent hypothermia (warm chain). Understand breastfeeding: initiation within 30 minutes, colostrum importance, positioning and attachment.' },
            { code: 'MDW 109', title: 'Community Midwifery I', credits: 2, description: 'Community-based maternity services, traditional birth attendant (TBA) collaboration, referral systems, and maternal mortality reduction strategies in Nigeria.', studyNotes: 'Understand the causes of high maternal mortality in Nigeria (haemorrhage, sepsis, eclampsia, obstructed labour, unsafe abortion). Study strategies for reduction: Skilled Birth Attendance (SBA), Emergency Obstetric Care (EmOC), Midwives Service Scheme (MSS), community health insurance. Learn TBA collaboration: training, referral, transportation.' },
            { code: 'MDW 110', title: 'Microbiology & Infection Prevention', credits: 2, description: 'Infection prevention in midwifery, puerperal sepsis, neonatal sepsis, universal precautions, and waste management in maternity units.', studyNotes: 'Study causes of puerperal sepsis (Group B Streptococcus, E. coli, Staphylococcus, anaerobes) and prevention strategies. Understand neonatal sepsis: early onset vs late onset, risk factors, signs (temperature instability, feeding difficulty, respiratory distress). Learn infection prevention practices: hand hygiene, use of PPE, sterile techniques during delivery, waste segregation.' },
          ],
        }],
        keyTopics: ['Reproductive anatomy and physiology', 'Antenatal care and risk assessment', 'Normal labour and partograph use', 'Postnatal care and family planning', 'Essential newborn care and resuscitation', 'Infection prevention in midwifery'],
        clinicalRotation: ['Antenatal clinic', 'Labour ward (supervised observation)', 'Postnatal ward', 'Family planning clinic', 'Neonatal unit (observation)'],
        skillsToMaster: ['Abdominal palpation (Leopold maneuvers)', 'Partograph plotting and interpretation', 'APGAR scoring', 'Episiotomy and perineal repair', 'Active management of third stage of labour', 'Breastfeeding support and positioning', 'Newborn resuscitation (Helping Babies Breathe)'],
        nmcnRelevance: 'The RM licensing exam emphasises normal pregnancy, labour, and neonatal care. Master the partograph, mechanisms of labour, and essential newborn care.',
        studyHoursTarget: 160,
        studyObjectives: [
          'Demonstrate thorough understanding of reproductive anatomy and physiology',
          'Provide comprehensive antenatal care including risk assessment and health education',
          'Manage normal labour and delivery using partograph monitoring',
          'Provide essential postnatal care for mother and newborn',
          'Deliver family planning services with appropriate counseling',
          'Promote maternal and newborn health in community settings',
        ],
        recommendedTextbooks: ['Myles - Textbook for Midwives', 'WHO - Managing Complications in Pregnancy and Childbirth', 'NMCN - Midwifery Curriculum', "Ladipo - Family Planning Handbook for Nigeria", 'McDonald & Avery - Neonatal Care'],
      },
      '2': {
        title: 'Second Year - Complex Midwifery & Gynaecology',
        description: 'High-risk pregnancy, complicated labour and delivery, obstetric emergencies, gynaecological conditions, and expanded neonatal care.',
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'MDW 201', title: 'Complicated Pregnancy (High-Risk)', credits: 3, description: 'Hypertensive disorders (pre-eclampsia, eclampsia), antepartum haemorrhage (placenta praevia, abruptio placentae), multiple pregnancy, gestational diabetes, Rh incompatibility.', studyNotes: 'Study hypertensive disorders: gestational hypertension, pre-eclampsia (mild, severe), eclampsia (seizures). Understand management: magnesium sulphate for seizure prophylaxis, antihypertensives, delivery planning. APH: placenta praevia (painless bright red bleeding) vs abruptio placentae (painful dark bleeding with concealed haemorrhage). Multiple pregnancy: increased risks (preterm labour, PPH, pre-eclampsia).' },
            { code: 'MDW 202', title: 'Complicated Labour & Delivery', credits: 4, description: 'Obstructed labour, prolonged labour, ruptured uterus, cord prolapse, shoulder dystocia, postpartum haemorrhage, assisted deliveries (vacuum, forceps), and caesarean section care.', studyNotes: 'Study the 3Ps of obstructed labour: Passenger (fetal), Passage (pelvis), Powers (contractions). Recognise signs of obstructed labour: Bandl\'s ring, maternal distress, fetal distress, caput succedaneum. PPH management: cause identification (4Ts: Tone, Tissue, Trauma, Thrombin), uterine massage, oxytocics, bimanual compression, surgical interventions. Cord prolapse: emergency management, knee-chest position, cord replacement.' },
            { code: 'MDW 203', title: 'Neonatal Care II (High-Risk Newborn)', credits: 3, description: 'Preterm and low birth weight care, neonatal jaundice, neonatal infections, congenital anomalies, birth asphyxia, and neonatal intensive care principles.', studyNotes: 'Study preterm/LBW care: KMC, thermoregulation, nutrition (breast milk, fortifiers, gavage feeding), infection prevention. Neonatal jaundice: physiological vs pathological, phototherapy, exchange transfusion. Birth asphyxia: APGAR <7 at 5 minutes, therapeutic hypothermia. Congenital anomalies: neural tube defects, cleft lip/palate, congenital heart disease - nursing care and family support.' },
            { code: 'MDW 204', title: 'Gynaecology for Midwives I', credits: 2, description: 'Gynaecological assessment, menstrual cycle disorders, pelvic infections (PID), sexually transmitted infections, cervical cancer screening.', studyNotes: 'Study menstrual disorders: amenorrhoea, dysmenorrhoea, menorrhagia, metrorrhagia, PMS/PMDD. Pelvic inflammatory disease (PID): causes (ascending infection), symptoms (lower abdominal pain, fever, abnormal discharge), treatment (antibiotics), complications (infertility, ectopic pregnancy, chronic pelvic pain). Cervical cancer screening: Pap smear, VIA (visual inspection with acetic acid), HPV testing.' },
            { code: 'MDW 205', title: 'Research Methods in Midwifery', credits: 2, description: 'Midwifery research process, quantitative and qualitative methods, evidence-based midwifery practice, and critical appraisal of literature.', studyNotes: 'Understand the importance of research for evidence-based midwifery practice. Learn quantitative research designs: randomised controlled trials, cohort studies, case-control studies, cross-sectional surveys. Study qualitative approaches: phenomenology, ethnography, grounded theory. Practice critical appraisal of midwifery research articles.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'MDW 206', title: 'Complicated Postnatal Care', credits: 3, description: 'Postpartum haemorrhage (primary and secondary), puerperal sepsis, thromboembolic disorders, postpartum psychiatric disorders, and maternal near-miss audit.', studyNotes: 'Study causes and management of primary PPH (within 24 hours: uterine atony, retained placenta, genital tract trauma, coagulation disorders) and secondary PPH (after 24 hours up to 6 weeks: retained products, infection). Puerperal sepsis: causes, signs, management, prevention. Postpartum psychiatric disorders: baby blues, postnatal depression, puerperal psychosis.' },
            { code: 'MDW 207', title: 'Gynaecology for Midwives II', credits: 2, description: 'Uterine fibroids, endometriosis, pelvic organ prolapse, infertility, ectopic pregnancy, gestational trophoblastic disease, and gynaecological surgeries.', studyNotes: 'Study uterine fibroids: types (submucosal, intramural, subserosal), symptoms (menorrhagia, pain, infertility), management (medical, surgical: myomectomy, hysterectomy). Endometriosis: causes, symptoms (dysmenorrhoea, dyspareunia, infertility), management. Ectopic pregnancy: risk factors, symptoms (abdominal pain, amenorrhoea, vaginal bleeding, shock), diagnosis, surgical management.' },
            { code: 'MDW 208', title: 'Community Midwifery II', credits: 2, description: 'Home birth planning and management, TBA training and supervision, community emergency transport schemes, and maternal death reviews.', studyNotes: 'Learn criteria for planned home birth (low-risk pregnancy, availability of skilled birth attendant, proximity to referral facility). Understand TBA training programmes: clean delivery practices, recognition of danger signs, referral procedures. Study community emergency transport schemes (SURE, voucher schemes, motorbike ambulances).' },
            { code: 'MDW 209', title: 'Leadership & Management in Midwifery', credits: 2, description: 'Midwifery service management, maternal health policy in Nigeria, advocacy for maternal health, and quality improvement in maternity care.', studyNotes: 'Understand the organisation of midwifery services in Nigeria: primary (health centres), secondary (general hospitals), tertiary (teaching hospitals). Study maternal health policies: National Reproductive Health Policy, National Health Act, NHIS maternal health coverage. Learn quality improvement approaches in maternity care: standards setting, audits (maternal death review, near-miss audit).' },
            { code: 'MDW 210', title: 'Adolescent, Sexual & Reproductive Health', credits: 2, description: 'Teenage pregnancy, STI/HIV in adolescents, reproductive rights, female genital mutilation (FGM), gender-based violence, and comprehensive sexuality education.', studyNotes: 'Study the prevalence and consequences of teenage pregnancy in Nigeria: increased maternal and neonatal risks, school dropout, poverty cycle. STI/HIV in adolescents: prevention strategies, testing, treatment. Understand the complications of FGM: immediate (haemorrhage, infection, death) and long-term (painful intercourse, childbirth complications, psychological trauma). Learn comprehensive sexuality education content and approaches.' },
          ],
        }],
        keyTopics: ['High-risk pregnancy management', 'Obstetric emergencies (PPH, eclampsia, cord prolapse)', 'Complicated labour and operative deliveries', 'Gynaecological conditions', 'High-risk neonatal care', 'Maternal mortality reduction strategies'],
        clinicalRotation: ['Labour ward (active management)', 'High-risk antenatal clinic', 'Gynaecology ward', 'Special Care Baby Unit (SCBU)/NICU', 'Community rotation with home births'],
        skillsToMaster: ['Obstetric emergency management (PPH protocols)', 'Manual removal of placenta', 'Episiotomy and repair technique', 'Vacuum extraction assistance', 'Advanced neonatal resuscitation', 'Obstetric ultrasound basics', 'Cervical cancer screening (VIA/VILI)'],
        nmcnRelevance: 'Obstetric emergencies and high-risk conditions form a major part of the RM licensing exam.',
        studyHoursTarget: 220,
        studyObjectives: [
          'Identify and manage high-risk pregnancy conditions effectively',
          'Recognise and manage obstetric emergencies promptly',
          'Provide specialised care for complicated labour and delivery',
          'Manage gynaecological conditions and provide appropriate referrals',
          'Care for high-risk neonates in SCBU/NICU settings',
          'Apply evidence-based midwifery research to clinical practice',
        ],
        recommendedTextbooks: ['WHO - Managing Complications in Pregnancy and Childbirth', 'Myles - Textbook for Midwives', 'NMCN - Midwifery Curriculum (Advanced)', 'Shaw - Gynaecology for Midwives', 'WHO - Essential Newborn Care Guidelines'],
      },
      '3': {
        title: 'Third Year - Advanced Practice & Licensing Preparation',
        description: 'Advanced midwifery practice, leadership, research project completion, and intensive preparation for the RM licensing exam.',
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'MDW 301', title: 'Advanced Midwifery Practice', credits: 3, description: 'Evidence-based midwifery models, advanced clinical decision-making, complex case management, and consultation/referral protocols.', studyNotes: 'Study advanced midwifery models: midwifery-led care, team midwifery, caseload midwifery. Develop clinical decision-making skills for complex cases: multiple pregnancy, breech presentation, previous caesarean section (VBAC), medical disorders in pregnancy (diabetes, hypertension, cardiac disease, HIV). Understand consultation and referral criteria.' },
            { code: 'MDW 302', title: 'Teaching & Mentorship in Midwifery', credits: 2, description: 'Clinical teaching methods, preceptorship, student supervision, lesson planning, and evaluation of clinical competence.', studyNotes: 'Learn clinical teaching methods: demonstration and return demonstration, case discussions, simulations, bedside teaching. Understand the preceptorship model: one-to-one teaching, role modelling, feedback. Develop lesson plans for midwifery topics. Learn evaluation methods: direct observation, checklists, portfolios, OSCEs.' },
            { code: 'MDW 303', title: 'Midwifery Research Project', credits: 3, description: 'Supervised research project on a midwifery topic, data analysis, report writing, and oral presentation.', studyNotes: 'Carry out a supervised research project on a relevant midwifery topic. Learn data analysis using appropriate statistical methods. Write a research report following academic standards. Prepare and deliver an oral presentation of research findings.' },
            { code: 'MDW 304', title: 'Legal & Ethical Issues in Midwifery', credits: 2, description: 'NMCN midwifery code of ethics, professional discipline, informed consent in obstetrics, maternal death litigation, and accountability.', studyNotes: 'Study the NMCN Code of Ethics for Midwives. Understand legal concepts: scope of practice, standard of care, informed consent (for procedures: episiotomy, caesarean section, blood transfusion). Learn about maternal death litigation in Nigeria. Understand professional accountability and the disciplinary process.' },
            { code: 'MDW 305', title: 'Reproductive Health Policy & Programmes', credits: 2, description: 'National reproductive health policy, MDGs/SDGs, NHIS maternal health coverage, safe motherhood initiatives, and advocacy strategies.', studyNotes: 'Study the National Reproductive Health Policy. Understand the Sustainable Development Goal (SDG) 3 targets for maternal and child health. Learn about safe motherhood initiatives: Making Pregnancy Safer, Saving Mothers Giving Life, Midwives Service Scheme. Understand the NHIS coverage for maternal health services.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'MDW 306', title: 'Comprehensive Clinical Internship (Midwifery)', credits: 6, description: 'Supervised independent practice across all maternity units, including labour ward, antenatal clinic, postnatal ward, SCBU, and community.', studyNotes: 'This is the final clinical integration. Demonstrate independent competence in: conducting deliveries (minimum required number as per NMCN), managing labour with partograph, performing episiotomy and repair, managing obstetric emergencies, providing comprehensive postnatal care, caring for normal and high-risk newborns.' },
            { code: 'MDW 307', title: 'Community Midwifery Practicum', credits: 4, description: 'Independent community midwifery practice: conducting deliveries in health centres, home visits, family planning services, and community health education.', studyNotes: 'Conduct antenatal and postnatal clinics independently. Manage normal deliveries at health centre level. Provide family planning services. Organise community health education sessions. Maintain adequate documentation and referral records.' },
            { code: 'MDW 308', title: 'RM Licensing Exam Preparation', credits: 3, description: 'Integrated revision of all midwifery subjects, mock RM examinations, practical examination drills, clinical case scenarios, and exam strategy.', studyNotes: 'RM exam structure (theory paper: 250-300 MCQs covering all subjects; practical: OSCE stations and delivery conduct). Focus revision on: obstetric emergencies, partograph, neonatal resuscitation, family planning, high-risk pregnancy management. Practice with past RM exam questions and clinical scenarios.' },
          ],
        }],
        keyTopics: ['Advanced midwifery clinical decision-making', 'Midwifery leadership and mentorship', 'Legal and ethical accountability', 'Maternal health policy advocacy', 'Independent clinical practice'],
        clinicalRotation: ['All maternity units (independent practice)', 'Community midwifery independent practice', 'Midwifery leadership rotation', 'RM licensing exam clinical drills'],
        skillsToMaster: ['Independent management of labour and delivery', 'Recognition and management of obstetric emergencies (without supervision)', 'Clinical teaching and preceptorship', 'Quality improvement in maternity care', 'RM licensing exam technique (theory and practical)'],
        nmcnRelevance: 'The RM licensing exam is the culmination of the programme. Study past RM exam questions and practice clinical procedures.',
        studyHoursTarget: 280,
        studyObjectives: [
          'Demonstrate independent clinical competence in all aspects of midwifery practice',
          'Apply advanced clinical decision-making skills to complex cases',
          'Teach and mentor student midwives effectively',
          'Understand legal and ethical dimensions of midwifery practice in Nigeria',
          'Conduct and present a midwifery research project',
          'Prepare thoroughly for the RM licensing examination',
        ],
        recommendedTextbooks: ['Myles - Textbook for Midwives', 'NMCN - RM Past Questions and Study Guide', 'WHO - Integrated Management of Pregnancy and Childbirth', 'NMCN - Code of Ethics for Midwives', 'National Reproductive Health Policy (Nigeria)'],
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
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'CHW 101', title: 'Basic Anatomy & Physiology', credits: 3, description: 'Structure and functions of body systems relevant to community health practice.', studyNotes: 'Focus on body systems most relevant to community health: cardiovascular (BP measurement), respiratory (TB, pneumonia), digestive (diarrhoea, malnutrition), reproductive (maternal health, family planning), and musculoskeletal (injuries).' },
            { code: 'CHW 102', title: 'Principles of Community Health', credits: 3, description: 'Concept of health and disease, community health definition, levels of healthcare, PHC principles, community diagnosis, and Nigerian health system.', studyNotes: 'Understand PHC principles: accessibility, community participation, inter-sectoral collaboration, appropriate technology. Study the three levels of healthcare in Nigeria. Learn community diagnosis: data collection, analysis, priority setting, action planning.' },
            { code: 'CHW 103', title: 'Environmental Health I', credits: 2, description: 'Water supply and purification, sanitation and waste disposal, food hygiene, housing standards, vector control, and environmental health regulations.', studyNotes: 'Study water purification methods: boiling, chlorination, filtration, solar disinfection. Understand excreta disposal methods: water carriage system (sewerage), non-water carriage (pit latrine, ventilated improved pit (VIP) latrine). Learn vector control: malaria (ITNs, IRS, larviciding), dengue, Lassa fever (rodent control).' },
            { code: 'CHW 104', title: 'Health Education & Communication', credits: 2, description: 'Health behaviour theories, communication methods, health talk preparation and delivery, visual aids, and community mobilisation strategies.', studyNotes: 'Learn the steps of planning a health talk: audience analysis, objective setting, content selection, method selection, evaluation. Study visual aid use: flip charts, posters, models, leaflets. Understand community mobilisation: working with community leaders, using existing community structures, organising health campaigns.' },
            { code: 'CHW 105', title: 'Microbiology & Disease Transmission', credits: 2, description: 'Disease-causing organisms, modes of transmission, chain of infection, immunology basics, and disease prevention principles.', studyNotes: 'Understand the chain of infection: infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host. Study modes of transmission: direct contact, airborne, waterborne, vector-borne, blood-borne. Learn disease prevention: primary (immunisation, health education), secondary (screening, early diagnosis), tertiary (rehabilitation).' },
            { code: 'GCH 101', title: 'English Language & Report Writing', credits: 2, description: 'Professional writing, health records documentation, report preparation, and verbal communication skills.', studyNotes: 'Learn health records documentation: patient registers, immunisation records, disease notification forms, monthly reports. Practice writing clear and concise reports for health programme activities.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'CHW 106', title: 'Pharmacology & Essential Drugs', credits: 2, description: 'Essential drugs list for primary health care, drug storage and management, routes of administration, dosage calculations, and prescription handling.', studyNotes: 'Study the essential drugs list for PHC level in Nigeria: antimalarials (ACTs), antibiotics (amoxicillin, cotrimoxazole, metronidazole), analgesics (paracetamol, ibuprofen), vaccines, ORS, vitamin A, iron/folate. Learn drug storage: cold chain for vaccines, stock management (FEFO/FIFO), expiry date monitoring.' },
            { code: 'CHW 107', title: 'Family & Child Health I', credits: 3, description: 'Family health concepts, growth monitoring, child health services, common childhood illnesses (malaria, diarrhoea, ARI, measles), IMCI strategy, and nutrition.', studyNotes: 'Learn the IMCI strategy: assess and classify, identify treatment, treat, counsel, follow-up. Study the IMCI colour-coded classification: pink (severe disease - urgent referral), yellow (manage at PHC), green (home management). Understand the IMCI chart for the young child: cough/difficult breathing, diarrhoea, fever, ear problem, and nutrition/immunisation status.' },
            { code: 'CHW 108', title: 'Nutrition in Community Health', credits: 2, description: 'Basic nutrition concepts, malnutrition types (kwashiorkor, marasmus), food security, therapeutic nutrition, micronutrient deficiencies, and supplementation programmes.', studyNotes: 'Understand the classification of malnutrition: acute malnutrition (moderate: MAM, severe: SAM), chronic malnutrition (stunting), underweight, micronutrient deficiencies (vitamin A, iron, iodine, zinc). Learn the management of severe acute malnutrition: therapeutic feeding (F-75, F-100, ready-to-use therapeutic food - RUTF). Study micronutrient supplementation programmes: Vitamin A (every 6 months), iron/folate (pregnancy).' },
            { code: 'CHW 109', title: 'First Aid & Emergency Management', credits: 2, description: 'First aid principles, wound care, bleeding control, fractures and splinting, burns, poisoning, snake bites, shock management, and emergency referral.', studyNotes: 'Master the emergency action principles: scene safety, primary assessment, life-threatening conditions management, secondary assessment. Study wound care: cleaning, dressing types, tetanus prophylaxis. Learn snake bite management in Nigeria: identify venomous snakes, pressure immobilisation, antivenom, avoid harmful traditional practices (incision, tourniquet, suction).' },
            { code: 'CHW 110', title: 'Sociology & Psychology for Community Health', credits: 2, description: 'Social determinants of health, cultural beliefs affecting health, community social structure, human behaviour, and mental health basics.', studyNotes: 'Understand social determinants of health: income, education, housing, access to services, social support networks. Study cultural beliefs affecting health in Nigeria: causes of disease (natural vs supernatural), traditional healers, religious healing. Learn mental health basics: common mental disorders (depression, anxiety, substance abuse) at community level, referral pathways.' },
          ],
        }],
        keyTopics: ['Community health principles', 'Environmental health and sanitation', 'Health education techniques', 'Family and child health', 'First aid and emergency response', 'Essential drugs management'],
        clinicalRotation: ['Community health centre observation', 'Environmental health field visit (water/sanitation)', 'Health education outreach observation'],
        skillsToMaster: ['Health talk delivery in community settings', 'Home visiting techniques', 'Environmental health inspection (water, housing, food)', 'Basic first aid and emergency response', 'Growth monitoring charting', 'Immunisation cold chain maintenance basics'],
        nmcnRelevance: 'Foundation for the CHEW certification exam. PHC principles, environmental health, and health education are core subjects.',
        studyHoursTarget: 110,
        studyObjectives: [
          'Apply PHC principles in community health practice',
          'Conduct environmental health assessments and promote hygiene',
          'Deliver effective health education in community settings',
          'Provide first aid and emergency response in the community',
          'Understand immunisation and essential drug management',
          'Identify social and cultural factors affecting community health',
        ],
        recommendedTextbooks: ['Park - Textbook of Preventive and Social Medicine', 'NPHCDA - CHEW Training Manual', 'WHO - IMCI Chart Booklet', 'NMCN - Community Health Curriculum', 'Lucas & Gilles - Short Textbook of Public Health'],
      },
      '2': {
        title: 'Second Year - Maternal, Child & Disease Control Services',
        description: 'Maternal and child health services, communicable disease control, immunisation, reproductive health, and PHC management.',
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'CHW 201', title: 'Maternal & Child Health Services', credits: 3, description: 'Antenatal care (booking, assessment, risk identification), postnatal care, family planning counseling and methods, breast feeding support, and child spacing.', studyNotes: 'Learn the components of focused antenatal care (FANC): booking, regular check-ups, tetanus toxoid, iron/folate supplementation, malaria prophylaxis (IPTp), risk screening, birth planning. Understand postnatal care: mother and baby check-ups, breastfeeding support, family planning initiation, danger sign recognition.' },
            { code: 'CHW 202', title: 'Communicable Disease Control & Surveillance', credits: 3, description: 'Epidemiology of communicable diseases in Nigeria (malaria, TB, HIV/AIDS, cholera, measles, meningitis, Lassa fever), disease notification, outbreak investigation, and control measures.', studyNotes: 'Study the epidemiology and control of priority diseases in Nigeria: malaria (ITNs, IPTp, ACTs, RDTs), TB (DOTS, contact tracing, INH prophylaxis), HIV (Prevention - ABC, PMTCT, ART, HTS), cholera (prevention - water, sanitation, hygiene; outbreak response), measles (EPI, outbreak response vaccination), Lassa fever (rodent control, infection prevention).' },
            { code: 'CHW 203', title: 'Primary Health Care Management I', credits: 2, description: 'PHC centre organisation, health records management, supplies and equipment management, supervision of community volunteers, and reporting systems.', studyNotes: 'Learn PHC centre organisation: staffing structure, service areas (MCH, immunisation, outpatient, pharmacy, records), daily routines. Understand health records: patient registers, daily activity sheets, monthly summary forms, DHIS2 reporting. Learn supply management: inventory systems, stock cards, ordering, storage, stock-outs management.' },
            { code: 'CHW 204', title: 'Reproductive Health & STI Management', credits: 2, description: 'Family planning methods (contraceptives), STI/HIV syndromic management, adolescent reproductive health, and reproductive health rights.', studyNotes: 'Learn family planning methods available at PHC level: oral contraceptives, injectables (DMPA, NET-EN), implants (Implanon, Jadelle), IUDs, male/female condoms, emergency contraception. Understand STI syndromic management: vaginal discharge, urethral discharge, genital ulcer. Learn the WHO syndromic management flowcharts.' },
            { code: 'CHW 205', title: 'Immunisation Services', credits: 2, description: 'Nigeria Expanded Programme on Immunisation (EPI) schedule, cold chain management, vaccine administration, injection safety, and coverage monitoring.', studyNotes: 'Memorise the Nigerian EPI schedule: BCG (birth), OPV (birth, 6, 10, 14 weeks), IPV (14 weeks), DPT (6, 10, 14 weeks), PCV (6, 10, 14 weeks), Rotavirus (6, 10 weeks), Measles (9 months), Yellow Fever (9 months), Vitamin A (9, 15 months), Meningitis A (9 months - in risk areas). Understand cold chain: 2-8°C, vaccine storage, VVM (vaccine vial monitor), cold chain equipment.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'CHW 206', title: 'Non-Communicable Disease Control', credits: 2, description: 'Epidemiology and management of hypertension, diabetes mellitus, cancer (cervical, breast), sickle cell disease, and mental disorders at community level.', studyNotes: 'Study NCD risk factors: tobacco use, unhealthy diet, physical inactivity, harmful alcohol use. Learn hypertension: BP measurement technique, classification, lifestyle management, drug treatment at PHC level. Diabetes: random blood glucose testing, dietary advice, foot care, referral criteria. Cervical cancer screening: VIA (visual inspection with acetic acid), cryotherapy for precancerous lesions.' },
            { code: 'CHW 207', title: 'Maternal & Neonatal Health', credits: 3, description: 'Screening for high-risk pregnancy, danger signs in pregnancy, birth preparedness, clean delivery practices, essential newborn care, and maternal death audit.', studyNotes: 'Learn the key danger signs in pregnancy: vaginal bleeding, severe headache, blurred vision, convulsions, severe abdominal pain, fever, difficulty breathing, reduced fetal movements. Birth preparedness: birth place, skilled birth attendant, transport, blood donor, funds. Clean delivery practices: clean hands, clean delivery surface, clean cord care. Essential newborn care: immediate drying, skin-to-skin, breastfeeding, cord care, eye care, vitamin K.' },
            { code: 'CHW 208', title: 'Environmental Health II', credits: 2, description: 'Food safety and inspection, occupational health hazards, air and noise pollution, climate change and health, and environmental impact assessment.', studyNotes: 'Learn food safety principles: personal hygiene, food handling, storage temperatures, cross-contamination prevention. Study occupational health hazards: physical (noise, heat), chemical (pesticides, industrial chemicals), biological (infectious agents), ergonomic (heavy lifting, repetitive movements). Understand climate change health impacts: heat-related illness, vector-borne disease expansion, food insecurity.' },
            { code: 'CHW 209', title: 'Primary Health Care Management II', credits: 2, description: 'PHC programme planning, budgeting, monitoring and evaluation, community participation strategies, and health centre financial management.', studyNotes: 'Learn health programme planning: situation analysis, priority setting, objective setting (SMART), activity planning, budgeting, implementation, monitoring and evaluation. Understand community participation in PHC: Village Health Committees, community health volunteers, community dialogue. Study health centre financial management: user fees, exemption policies, NHIS capitation, financial reporting.' },
            { code: 'CHW 210', title: 'School Health Services', credits: 2, description: 'School health appraisal, school environment inspection, health services in schools, health instruction, and school feeding programmes.', studyNotes: 'Understand the three components of the school health programme: health appraisal (screening: vision, hearing, dental, growth, anaemia), healthful school environment (sanitation, water supply, lighting, ventilation, safety), health instruction (health topics integrated into curriculum). Learn school health records and referral systems.' },
          ],
        }],
        keyTopics: ['Maternal and child health services', 'Communicable disease control', 'Immunisation (EPI Nigeria)', 'Family planning provision', 'PHC centre management', 'Disease surveillance and notification'],
        clinicalRotation: ['Maternal and child health (MCH) clinic', 'Immunisation post', 'PHC centre management attachment', 'STI/HIV clinic', 'School health programme'],
        skillsToMaster: ['Antenatal booking and assessment', 'Growth monitoring and promotion', 'Immunisation administration and cold chain management', 'Family planning counseling and method provision', 'Disease notification and reporting', 'Health centre record keeping', 'Community diagnosis and mapping'],
        nmcnRelevance: 'Maternal-child health and disease control form the core of the CHEW certification exam. Study the EPI schedule, common communicable diseases, and PHC management.',
        studyHoursTarget: 170,
        studyObjectives: [
          'Provide comprehensive maternal and child health services at PHC level',
          'Implement communicable disease control and surveillance activities',
          'Manage PHC centre operations and health records effectively',
          'Deliver immunisation services following the Nigerian EPI schedule',
          'Provide family planning services and reproductive health education',
          'Conduct school health programmes and environmental health inspections',
        ],
        recommendedTextbooks: ['NPHCDA - CHEW Training Manual (Level 2)', 'WHO - IMCI Chart Booklet', 'Nigeria EPI Guidelines and Schedule', 'NPHCDA - PHC Management Guidelines', 'Adetokunbo & Lucas - Public Health in the Tropics'],
      },
      '3': {
        title: 'Third Year - Advanced Community Practice & Certification',
        description: 'Advanced community health management, disaster response, research, and comprehensive field practice preparing for CHEW certification.',
        semesters: [{
          name: 'First Semester',
          courses: [
            { code: 'CHW 301', title: 'Community Health Management & Supervision', credits: 3, description: 'Advanced PHC management, health team leadership, supervision of CHEWs and community volunteers, quality improvement, and health programme evaluation.', studyNotes: 'Learn supervision methods: supportive supervision (vs inspection), supervisory checklists, feedback and coaching, performance assessment. Understand quality improvement approaches: problem identification, root cause analysis, plan-do-study-act (PDSA) cycles. Study health programme evaluation: process, outcome, and impact evaluation; use of data for decision-making.' },
            { code: 'CHW 302', title: 'Research Methods & Community Needs Assessment', credits: 2, description: 'Community health survey methods, needs assessment techniques, data analysis, report writing, and use of findings for programme planning.', studyNotes: 'Learn community needs assessment methods: focus group discussions (FGDs), key informant interviews (KIIs), community surveys, observation, secondary data review. Study data analysis: manual and computer-based, interpretation of findings, report writing (situation analysis reports, programme reports).' },
            { code: 'CHW 303', title: 'Health Policy, Advocacy & Community Mobilisation', credits: 2, description: 'National health policies (NHIS, NPHCDA), advocacy strategies, community dialogue, social mobilisation, and partnership building.', studyNotes: 'Understand the structure and functions of the National Primary Health Care Development Agency (NPHCDA). Study the National Health Insurance Scheme (NHIS) and its community-based health insurance component. Learn advocacy strategies: stakeholder mapping, message development, advocacy visit planning. Learn community dialogue: identifying and engaging community leaders, facilitating participatory discussions.' },
            { code: 'CHW 304', title: 'Disaster Preparedness & Management', credits: 2, description: 'Types of disasters, disaster risk reduction, emergency response planning, triage in mass casualty, and community resilience building.', studyNotes: 'Study disaster classification: natural (floods, droughts, epidemics) vs man-made (conflict, industrial accidents, fire). Understand the disaster management cycle: mitigation, preparedness, response, recovery. Learn community-based disaster preparedness: early warning systems, evacuation planning, emergency supply stockpiling. Understand triage in mass casualty: simple triage and rapid treatment (START) system.' },
            { code: 'CHW 305', title: 'Ethics & Professional Practice in Community Health', credits: 2, description: 'Professional ethics, community health workers code of conduct, confidentiality, patient rights, and professional regulation.', studyNotes: 'Study the professional code of conduct for CHEWs: respect for persons, beneficence, non-maleficence, justice, confidentiality. Understand patient rights in community health: right to information, right to choose, right to privacy, right to referral. Learn professional regulation: registration, licensing, continuing professional development (CPD), professional misconduct and sanctions.' },
          ],
        }, {
          name: 'Second Semester',
          courses: [
            { code: 'CHW 306', title: 'Comprehensive Community Health Practicum', credits: 6, description: 'Full-time supervised field practice: managing PHC centre, conducting community outreach, home visiting, disease surveillance, school health, and MCH services.', studyNotes: 'During this practicum, demonstrate competence in: independent management of PHC centre daily operations, conducting MCH clinics (antenatal, immunisation, family planning), home visiting (assessment, health education, referral), disease surveillance (case investigation, notification, community-based surveillance), school health programme implementation.' },
            { code: 'CHW 307', title: 'CHEW Certification Exam Preparation', credits: 3, description: 'Comprehensive revision of all subjects, mock certification examinations, practical examination drills, and exam-taking strategies.', studyNotes: 'The CHEW certification exam covers: Community Health (30%), Environmental Health (15%), Maternal-Child Health (20%), Disease Control (15%), PHC Management (10%), Health Education (5%), Ethics (5%). Practice with past CHEW exam questions. Focus on practical scenarios: EPI schedule, IMCI classification, water purification methods, immunisation cold chain, PHC records, family planning methods, communicable disease control.' },
          ],
        }],
        keyTopics: ['Community health management and supervision', 'Health policy and advocacy', 'Disaster preparedness', 'Community health research', 'Professional ethics and accountability'],
        clinicalRotation: ['Independent PHC centre management', 'Rural community health posting', 'Local government health authority', 'NGO/Community-based organisation placement'],
        skillsToMaster: ['Health centre management and supervision', 'Community mobilisation and advocacy', 'Training and supervision of community volunteers', 'Health programme monitoring and evaluation', 'Disaster response coordination', 'CHEW certification exam technique'],
        nmcnRelevance: 'CHEW certification exam covers all community health subjects. Focus on integrated case scenarios, PHC management, and disease control.',
        studyHoursTarget: 230,
        studyObjectives: [
          'Manage PHC centre operations independently and supervise staff',
          'Conduct community needs assessments and plan interventions',
          'Advocate for health and mobilise community participation',
          'Prepare for and respond to disasters and emergencies',
          'Apply ethical principles in community health practice',
          'Prepare thoroughly for the CHEW certification examination',
        ],
        recommendedTextbooks: ['NPHCDA - CHEW Training Manual (Level 3)', 'Last - Public Health and Epidemiology', 'WHO - Disaster Management Guidelines', 'NMCN - CHEW Code of Practice', 'NPHCDA - PHC Programme Management Guidelines'],
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
        semesters: [{
          name: 'Core Theory Modules (First 6 Months)',
          courses: [
            { code: 'PBN 101', title: 'Advanced Pathophysiology & Pharmacology', credits: 3, description: 'Advanced study of disease mechanisms and pharmacotherapeutics relevant to the chosen specialty.', studyNotes: 'Study advanced pathophysiology concepts specific to your specialty (e.g., psychiatric: neurotransmitter imbalances; ophthalmic: intraocular pressure regulation). Understand pharmacotherapeutics: drug mechanisms, side effects, interactions, and nursing considerations specific to the specialty population.' },
            { code: 'PBN 102', title: 'Specialty Nursing Theory I', credits: 4, description: 'In-depth theoretical foundations of the chosen specialty: assessment, diagnosis, intervention, and evaluation within the specialty area.', studyNotes: 'Master specialty-specific assessment tools (e.g., psychiatric: MSE, suicide risk assessment; ophthalmic: Snellen chart, tonometry; orthopaedic: neurovascular assessment). Study evidence-based interventions and outcome evaluation in the specialty context.' },
            { code: 'PBN 103', title: 'Advanced Research & Evidence-Based Practice', credits: 3, description: 'Research methodology, critical appraisal of literature, evidence implementation, and quality improvement methodologies.', studyNotes: 'Learn advanced critical appraisal skills using CASP or JBI tools. Understand evidence implementation frameworks (PARIHS, JBI model, Stetler model). Study quality improvement methodologies: Plan-Do-Study-Act (PDSA), Lean, Six Sigma, and their application in nursing.' },
            { code: 'PBN 104', title: 'Leadership, Management & Health Policy', credits: 3, description: 'Advanced leadership theories, healthcare management, policy analysis, strategic planning, interprofessional collaboration, and patient advocacy.', studyNotes: 'Study transformational leadership, emotional intelligence, and change management in healthcare. Understand health policy analysis: agenda setting, policy formulation, implementation, evaluation. Learn strategic planning: SWOT analysis, vision/mission development, strategic objectives, action planning.' },
            { code: 'PBN 105', title: 'Clinical Teaching & Mentorship', credits: 2, description: 'Educational theories for clinical settings, preceptorship models, student assessment and evaluation, clinical instruction techniques, and feedback strategies.', studyNotes: 'Study clinical teaching models: preceptorship, mentorship, clinical facilitation. Learn effective feedback strategies: Pendleton\'s rules, the feedback sandwich, SBI model (Situation, Behaviour, Impact). Understand assessment of clinical competence: direct observation, OSCEs, portfolios, reflective journals.' },
          ],
        }, {
          name: 'Clinical Practice Modules (6-12 Months)',
          courses: [
            { code: 'PBN 201', title: 'Specialty Nursing Theory II & Clinical Practicum', credits: 6, description: 'Advanced clinical practice in the chosen specialty area under supervision.', studyNotes: 'Achieve competence in specialty-specific procedures and patient management. Participate in case conferences and interdisciplinary team meetings. Develop a portfolio documenting clinical experiences and competency achievement.' },
            { code: 'PBN 202', title: 'Supervised Clinical Placement (Specialty Unit)', credits: 8, description: 'Full-time supervised clinical placement in a recognised specialty unit with minimum required clinical hours.', studyNotes: 'Complete the required clinical hours for your specialty as specified by NMCN. Master all core competencies for the specialty. Maintain a logbook of clinical experiences signed by supervisors.' },
            { code: 'PBN 203', title: 'Quality Improvement Project', credits: 3, description: 'Design and implementation of a quality improvement project in the specialty setting.', studyNotes: 'Identify a quality gap in your specialty area. Use a structured QI methodology (e.g., PDSA cycles). Collect baseline and post-intervention data. Present outcomes in a written report and oral presentation.' },
            { code: 'PBN 204', title: 'Specialty Certification Exam Preparation', credits: 2, description: 'Comprehensive review of specialty content, mock examinations, clinical examination preparation, and study strategies.', studyNotes: 'The NMCN specialty certification exam includes theoretical and practical components. Review all specialty-specific content. Practice with past exam questions. Prepare for the practical/OSCE examination: rehearse common clinical scenarios and procedures specific to your specialty.' },
          ],
        }],
        keyTopics: ['Advanced pathophysiology and pharmacology', 'Specialty-specific nursing theory and practice', 'Evidence-based practice implementation', 'Clinical leadership and management', 'Quality improvement in specialty care', 'Clinical teaching and mentorship'],
        clinicalRotation: ['Specialty unit (full-time clinical placement)', 'Teaching/preceptorship placement', 'Leadership rotation with specialty unit manager', 'Community/outreach specialty services (where applicable)'],
        skillsToMaster: ['Advanced clinical assessment in specialty area', 'Specialty-specific clinical procedures and interventions', 'Clinical teaching and preceptorship', 'Evidence-based practice implementation', 'Quality improvement project methodology', 'Specialty certification exam technique'],
        nmcnRelevance: 'Post-basic graduates sit for the NMCN specialty certification examination in their chosen specialty. The exam includes both theoretical and practical components.',
        studyHoursTarget: 300,
        studyObjectives: [
          'Demonstrate advanced theoretical knowledge in the chosen nursing specialty',
          'Perform specialty-specific clinical procedures competently and safely',
          'Critically appraise and implement evidence-based practice in specialty care',
          'Lead and manage specialty nursing services effectively',
          'Teach and mentor nursing students and colleagues in the specialty',
          'Prepare successfully for the NMCN specialty certification examination',
        ],
        recommendedTextbooks: ['Specialty-specific textbooks as recommended by the training institution', 'NMCN - Specialty Curriculum and Examination Guidelines', 'Melnyk & Fineout-Overholt - Evidence-Based Practice in Nursing', 'Marquis & Huston - Leadership Roles and Management Functions', 'Relevant journal articles and clinical practice guidelines for the specialty'],
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
