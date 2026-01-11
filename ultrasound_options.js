// Ultrasound Report Options for Doctero Software

const ULTRASOUND_OPTIONS = {
  // Obstetric USG Options
  OBSTETRIC: {
    FETAL_PRESENTATION: [
      'Cephalic',
      'Breech',
      'Transverse',
      'Oblique'
    ],
    
    FETAL_LIE: [
      'Longitudinal',
      'Transverse',
      'Oblique'
    ],
    
    FETAL_MOVEMENT: [
      'Normal',
      'Active/Fast',
      'Reduced/Slow',
      'Absent'
    ],
    
    CARDIAC_ACTIVITY: [
      'Present',
      'Absent'
    ],
    
    PLACENTA_POSITION: [
      'Anterior',
      'Posterior',
      'Fundal',
      'Low lying',
      'Placenta previa'
    ],
    
    AMNIOTIC_FLUID: [
      'Normal',
      'Oligohydramnios',
      'Polyhydramnios'
    ]
  },

  // Pelvic USG Options
  PELVIC: {
    FEMALE_FINDINGS: [
      'Normal pelvic ultrasound',
      'Polycystic ovarian morphology (PCOS)',
      'Simple ovarian cyst',
      'Complex ovarian cyst',
      'Uterine fibroid (leiomyoma)',
      'Endometrial thickening',
      'Endometrial polyp',
      'Pelvic inflammatory disease (PID)',
      'Ovarian mass/tumor suspicion',
      'Adnexal mass',
      'Hydrosalpinx',
      'Pyosalpinx',
      'Free fluid in pelvis',
      'Post-surgical changes'
    ],
    
    MALE_FINDINGS: [
      'Normal prostate and urinary bladder',
      'Enlarged prostate (BPH)',
      'Prostatitis',
      'Bladder wall thickening',
      'Urinary bladder mass',
      'Seminal vesicle abnormalities',
      'Post-void residual urine'
    ]
  },

  // Abdominal USG Options - Organ Specific Findings
  ABDOMINAL: {
    LIVER_FINDINGS: [
      'Normal liver echotexture and size',
      'Hepatomegaly',
      'Fatty liver (hepatic steatosis)',
      'Liver cirrhosis',
      'Hepatic cyst',
      'Liver mass/lesion',
      'Hepatic hemangioma',
      'Portal hypertension',
      'Ascites',
      'Dilated portal vein'
    ],
    
    GALLBLADDER_FINDINGS: [
      'Normal gallbladder',
      'Cholelithiasis (gallstones)',
      'Cholecystitis (acute/chronic)',
      'Gallbladder polyp',
      'Gallbladder wall thickening',
      'Contracted gallbladder',
      'Gallbladder mass',
      'Pericholecystic fluid'
    ],
    
    PANCREAS_FINDINGS: [
      'Normal pancreas',
      'Pancreatitis (acute/chronic)',
      'Pancreatic mass',
      'Pancreatic cyst',
      'Dilated pancreatic duct',
      'Pancreatic calcifications',
      'Pancreatic atrophy'
    ],
    
    SPLEEN_FINDINGS: [
      'Normal spleen size and echotexture',
      'Splenomegaly',
      'Splenic cyst',
      'Splenic mass/lesion',
      'Splenic infarct',
      'Accessory spleen'
    ],
    
    KIDNEY_FINDINGS: [
      'Normal kidneys bilaterally',
      'Renal cyst (simple/complex)',
      'Nephrolithiasis (kidney stones)',
      'Hydronephrosis',
      'Renal mass/tumor',
      'Chronic kidney disease',
      'Renal cortical thinning',
      'Pyelonephritis',
      'Polycystic kidney disease'
    ],
    
    BOWEL_FINDINGS: [
      'Normal bowel loops',
      'Bowel wall thickening',
      'Bowel obstruction',
      'Inflammatory bowel disease',
      'Appendicitis',
      'Bowel mass',
      'Free fluid in abdomen'
    ],
    
    VASCULAR_FINDINGS: [
      'Normal abdominal vessels',
      'Abdominal aortic aneurysm',
      'Portal vein thrombosis',
      'IVC dilatation',
      'Mesenteric lymphadenopathy'
    ]
  },

  // General USG Impressions
  IMPRESSIONS: [
    'Normal study',
    'No abnormality detected',
    'Findings suggestive of PID',
    'Ovarian cyst - follow-up advised',
    'Fibroid uterus - clinical correlation suggested',
    'Suspicious mass - recommend further imaging',
    'Post-operative changes - no residual disease',
    'Incomplete study - patient preparation required',
    'Technical limitations - repeat study advised'
  ],

  // USG Types
  USG_TYPES: [
    'Obstetric USG',
    'Pelvic USG (Female)',
    'Pelvic USG (Male)',
    'Abdominal USG',
    'Hepatobiliary USG',
    'Renal USG',
    'Pancreatic USG',
    'Splenic USG',
    'Thyroid USG',
    'Breast USG',
    'Scrotal USG',
    'Carotid Doppler',
    'Lower limb Doppler'
  ],

  // Recommendations
  RECOMMENDATIONS: [
    'No follow-up required',
    'Follow-up after 4 weeks',
    'Follow-up after 3 months',
    'Follow-up after 6 months',
    'Annual follow-up advised',
    'Immediate gynecological consultation',
    'Urological consultation advised',
    'Gastroenterology consultation advised',
    'Hepatology consultation recommended',
    'Further imaging (CT/MRI) recommended',
    'Biopsy consideration',
    'Surgical consultation advised',
    'Emergency referral required'
  ],

  // Abdominal Organ Specific Impressions
  ABDOMINAL_IMPRESSIONS: [
    'Normal abdominal ultrasound',
    'Hepatomegaly with fatty infiltration',
    'Cholelithiasis - surgical consultation advised',
    'Renal calculi - urological follow-up',
    'Pancreatic mass - urgent CT recommended',
    'Splenomegaly - hematological workup advised',
    'Ascites - further evaluation required',
    'Bowel obstruction - emergency referral',
    'Abdominal mass - tissue diagnosis needed',
    'Chronic liver disease - hepatology consultation'
  ]
};

module.exports = ULTRASOUND_OPTIONS;