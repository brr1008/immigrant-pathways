document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - script.js is running.');

    // --- Passion Discovery Logic (Checkbox-based) ---
    const showPassionsBtn = document.getElementById('showPassionsBtn');
    const passionReport = document.getElementById('passionReport');
    const passionResultsContent = document.getElementById('passionResultsContent');
    const noPassionsSelected = document.getElementById('noPassionsSelected');

    // Comprehensive mapping of niche passions to fields, careers, and explore links
    const passionMapping = {
        // Science & Research
        "Microbiology Research": {
            fields: ["Biology", "Biotechnology", "Public Health", "Environmental Science"],
            careers: ["Microbiologist", "Lab Researcher", "Biomedical Scientist", "Epidemiologist", "Food Scientist"],
            exploreLinks: [
                { text: "American Society for Microbiology (ASM)", url: "https://asm.org/" },
                { text: "Khan Academy: Biology", url: "https://www.khanacademy.org/science/biology" }
            ]
        },
        "Astrophysics & Cosmology": {
            fields: ["Physics", "Astronomy", "Theoretical Physics"],
            careers: ["Astronomer", "Astrophysicist", "Physics Professor", "Research Scientist"],
            exploreLinks: [
                { text: "NASA Jet Propulsion Lab Education", url: "https://www.jpl.nasa.gov/edu" },
                { text: "American Astronomical Society", url: "https://aas.org/" }
            ]
        },
        "Genetics & Gene Editing": {
            fields: ["Genetics", "Molecular Biology", "Biotechnology", "Bioethics"],
            careers: ["Geneticist", "Bioengineer", "Clinical Genetic Counselor", "Biomedical Researcher"],
            exploreLinks: [
                { text: "National Human Genome Research Institute", url: "https://www.genome.gov/education" },
                { text: "CRISPR Explained (HHMI)", url: "https://www.hhmi.org/biointeractive/crispr-cas9-genome-editing" }
            ]
        },
        "Neuroscience & Brain Function": {
            fields: ["Neuroscience", "Psychology", "Cognitive Science", "Medicine"],
            careers: ["Neuroscientist", "Cognitive Psychologist", "Neurologist", "Researcher"],
            exploreLinks: [
                { text: "Society for Neuroscience", url: "https://www.sfn.org/" },
                { text: "BrainFacts.org", url: "https://www.brainfacts.org/" }
            ]
        },
        "Particle Physics Experiments": {
            fields: ["Physics", "High Energy Physics", "Accelerator Physics"],
            careers: ["Particle Physicist", "Experimental Physicist", "Data Scientist"],
            exploreLinks: [
                { text: "CERN Public Education", url: "https://home.cern/about/next-big-thing" },
                { text: "FermiLab Education", url: "https://www.fnal.gov/pub/education/" }
            ]
        },
        "Oceanography & Marine Biology": {
            fields: ["Oceanography", "Marine Biology", "Environmental Science", "Ecology"],
            careers: ["Oceanographer", "Marine Biologist", "Conservation Scientist", "Research Diver"],
            exploreLinks: [
                { text: "Woods Hole Oceanographic Institution", url: "https://www.whoi.edu/what-we-do/educate/" },
                { text: "National Geographic Education", url: "https://education.nationalgeographic.org/resource/marine-biologist/" }
            ]
        },
        "Biomedical Engineering": {
            fields: ["Engineering", "Biomedical Science", "Medical Technology"],
            careers: ["Biomedical Engineer", "Medical Device Designer", "Biofabrication Specialist"],
            exploreLinks: [
                { text: "Biomedical Engineering Society", url: "https://www.bmes.org/" },
                { text: "DiscoverE - Biomedical Engineer", url: "https://www.discovere.org/explore-engineering/careers/biomedical-engineer" }
            ]
        },
        "Environmental Conservation Science": {
            fields: ["Environmental Science", "Ecology", "Conservation", "Sustainability"],
            careers: ["Conservation Scientist", "Environmental Consultant", "Wildlife Biologist", "Park Ranger"],
            exploreLinks: [
                { text: "The Nature Conservancy", url: "https://www.nature.org/" },
                { text: "EPA Student Programs", url: "https://www.epa.gov/careers/student-and-recent-graduate-programs" }
            ]
        },
        "Epidemiology & Public Health": {
            fields: ["Public Health", "Statistics", "Medicine", "Sociology"],
            careers: ["Epidemiologist", "Public Health Analyst", "Biostatistician", "Health Policy Analyst"],
            exploreLinks: [
                { text: "CDC Careers: Epidemiologist", url: "https://www.cdc.gov/careers/job-opportunities/epidemiologist.html" },
                { text: "American Public Health Association", url: "https://www.apha.org/" }
            ]
        },
        "Quantum Computing Concepts": {
            fields: ["Physics", "Computer Science", "Mathematics"],
            careers: ["Quantum Engineer", "Quantum Algorithm Developer", "Research Scientist"],
            exploreLinks: [
                { text: "IBM Quantum Experience", url: "https://quantum-computing.ibm.com/" },
                { text: "MIT Introduction to Quantum Computing", url: "https://mitx.mit.edu/courses/quantum-computing-x/" }
            ]
        },

        // Arts & Creative Expression
        "Digital Illustration & Concept Art": {
            fields: ["Graphic Design", "Animation", "Fine Arts", "Game Design"],
            careers: ["Illustrator", "Concept Artist", "Animator", "Graphic Designer", "Storyboard Artist"],
            exploreLinks: [
                { text: "ArtStation", url: "https://www.artstation.com/" },
                { text: "Domestika Courses", url: "https://www.domestika.org/en/courses/illustration" }
            ]
        },
        "Sculpture & 3D Art": {
            fields: ["Fine Arts", "Industrial Design", "Architecture", "Art Conservation"],
            careers: ["Sculptor", "3D Modeler", "Exhibit Designer", "Art Restorer"],
            exploreLinks: [
                { text: "International Sculpture Center", url: "https://sculpture.org/" },
                { text: "Local Art Museums & Galleries" }
            ]
        },
        "Street Art & Graffiti": {
            fields: ["Urban Art", "Public Art", "Graphic Design", "Social Commentary"],
            careers: ["Muralist", "Graphic Designer", "Public Artist", "Art Educator"],
            exploreLinks: [
                { text: "Street Art Cities", url: "https://streetartcities.com/" },
                { text: "Local Community Arts Centers" }
            ]
        },
        "Improv Comedy Performance": {
            fields: ["Theater Arts", "Performance", "Public Speaking", "Creative Writing"],
            careers: ["Comedian", "Actor", "Speech Coach", "Team Building Facilitator"],
            exploreLinks: [
                { text: "The Second City Training Center", url: "https://www.secondcity.com/courses/chicago/improv/" },
                { text: "Local Improv Groups" }
            ]
        },
        "Musical Theater Production": {
            fields: ["Theater Arts", "Music", "Dance", "Performance"],
            careers: ["Actor", "Singer", "Dancer", "Director", "Stage Manager"],
            exploreLinks: [
                { text: "Broadway Junior", url: "https://www.mtishows.com/broadway-junior" },
                { text: "Local Community Theaters" }
            ]
        },
        "Choreography & Dance Composition": {
            fields: ["Dance", "Performance Art", "Kinesiology"],
            careers: ["Choreographer", "Professional Dancer", "Dance Instructor", "Movement Therapist"],
            exploreLinks: [
                { text: "American Dance Festival", url: "https://americandancefestival.org/" },
                { text: "Local Dance Studios" }
            ]
        },
        "Scriptwriting for Film/TV": {
            fields: ["Creative Writing", "Film Studies", "Media Production"],
            careers: ["Screenwriter", "TV Writer", "Filmmaker", "Story Editor"],
            exploreLinks: [
                { text: "Sundance Co/Lab", url: "https://collab.sundance.org/" },
                { text: "Writers Guild Foundation", url: "https://www.wgfoundation.org/" }
            ]
        },
        "Documentary Filmmaking": {
            fields: ["Film Studies", "Journalism", "Social Sciences", "Media Production"],
            careers: ["Documentary Filmmaker", "Cinematographer", "Editor", "Investigative Journalist"],
            exploreLinks: [
                { text: "International Documentary Association (IDA)", url: "https://www.documentary.org/" },
                { text: "POV Films (PBS)", url: "https://www.pbs.org/pov/" }
            ]
        },
        "Fan Fiction & World-Building": {
            fields: ["Creative Writing", "Literature", "Narrative Design", "Fandom Studies"],
            careers: ["Author", "Game Writer", "Content Creator", "Editor"],
            exploreLinks: [
                { text: "Archive of Our Own (AO3)", url: "https://archiveofourown.org/" },
                { text: "NaNoWriMo (National Novel Writing Month)", url: "https://nanowrimo.org/" }
            ]
        },
        "Music Production & Sound Design": {
            fields: ["Music Technology", "Audio Engineering", "Composition", "Film Scoring"],
            careers: ["Music Producer", "Sound Designer", "Audio Engineer", "Composer", "Studio Technician"],
            exploreLinks: [
                { text: "Berklee Online", url: "https://online.berklee.edu/courses/music-production" },
                { text: "Ableton Learn Live", url: "https://www.ableton.com/en/learn-live/" }
            ]
        },
        "Ethnomusicology (Study of Music & Culture)": {
            fields: ["Musicology", "Anthropology", "Cultural Studies"],
            careers: ["Ethnomusicologist", "Cultural Researcher", "Museum Curator", "Archivist"],
            exploreLinks: [
                { text: "Society for Ethnomusicology", url: "https://www.ethnomusicology.org/" },
                { text: "Smithsonian Folkways Recordings", url: "https://folkways.si.edu/" }
            ]
        },
        "Classical Music Composition": {
            fields: ["Music Theory", "Composition", "Orchestration"],
            careers: ["Composer", "Arranger", "Orchestrator", "Music Educator"],
            exploreLinks: [
                { text: "Juilliard Pre-College", url: "https://www.juilliard.edu/precollege" },
                { text: "American Composers Forum", url: "https://composersforum.org/" }
            ]
        },
        "Fashion Design & Sustainability": {
            fields: ["Fashion Design", "Textile Science", "Sustainability", "Business"],
            careers: ["Fashion Designer", "Textile Designer", "Sustainable Fashion Consultant", "Merchandiser"],
            exploreLinks: [
                { text: "Fashion Institute of Technology (FIT)", url: "https://www.fitnyc.edu/" },
                { text: "Fashion Revolution", url: "https://www.fashionrevolution.org/" }
            ]
        },
        "Costume Design for Theater": {
            fields: ["Theater Arts", "Fashion Design", "History", "Textile Arts"],
            careers: ["Costume Designer", "Wardrobe Manager", "Costume Maker"],
            exploreLinks: [
                { text: "United States Institute for Theatre Technology (USITT)", url: "https://www.usitt.org/" },
                { text: "Local Theater Companies" }
            ]
        },
        "Visual Storytelling (Comics/Graphic Novels)": {
            fields: ["Sequential Art", "Illustration", "Creative Writing", "Publishing"],
            careers: ["Comic Artist", "Graphic Novelist", "Illustrator", "Storyboard Artist"],
            exploreLinks: [
                { text: "School of Visual Arts (SVA) Comics", url: "https://sva.edu/academics/undergraduate-degrees/bachelor-of-fine-arts-comics" },
                { text: "Comic-Con International", url: "https://www.comic-con.org/" }
            ]
        },


        // Community & Social Impact
        "Permaculture & Sustainable Farming": {
            fields: ["Environmental Science", "Agriculture", "Horticulture", "Ecology"],
            careers: ["Permaculture Designer", "Sustainable Farmer", "Environmental Educator", "Agronomist"],
            exploreLinks: [
                { text: "Permaculture Institute", url: "https://www.permaculture.org/" },
                { text: "Local Community Farms/Gardens" }
            ]
        },
        "Urban Gardening & Food Security": {
            fields: ["Horticulture", "Community Development", "Public Health", "Environmental Justice"],
            careers: ["Urban Farmer", "Community Organizer", "Food Justice Advocate", "Non-Profit Coordinator"],
            exploreLinks: [
                { text: "National Gardening Association", url: "https://garden.org/" },
                { text: "USDA Urban Agriculture", url: "https://www.farmers.gov/urban" }
            ]
        },
        "Climate Change Policy Advocacy": {
            fields: ["Political Science", "Environmental Policy", "Law", "Public Administration"],
            careers: ["Policy Analyst", "Lobbyist", "Environmental Lawyer", "Advocacy Campaigner"],
            exploreLinks: [
                { text: "Sunrise Movement", url: "https://www.sunrisemovement.org/" },
                { text: "Environmental Defense Fund (EDF)", url: "https://www.edf.org/" }
            ]
        },
        "Refugee Support & Integration": {
            fields: ["Social Work", "International Relations", "Humanitarian Aid", "Cultural Studies"],
            careers: ["Caseworker", "Program Coordinator (NGO)", "Immigration Specialist", "Community Liaison"],
            exploreLinks: [
                { text: "International Rescue Committee (IRC)", url: "https://www.rescue.org/" },
                { text: "UN Refugee Agency (UNHCR)", url: "https://www.unhcr.org/en-us/get-involved" }
            ]
        },
        "Immigration Law & Policy Reform": {
            fields: ["Law", "Political Science", "Sociology", "Public Policy"],
            careers: ["Immigration Lawyer", "Policy Advocate", "Legal Aid Worker", "Researcher"],
            exploreLinks: [
                { text: "American Immigration Lawyers Association (AILA)", url: "https://www.aila.org/" },
                { text: "National Immigration Law Center (NILC)", url: "https://www.nilc.org/" }
            ]
        },
        "Youth Leadership & Advocacy": {
            fields: ["Leadership Studies", "Civic Engagement", "Education", "Public Speaking"],
            careers: ["Youth Program Coordinator", "Community Activist", "Educator", "Non-Profit Leader"],
            exploreLinks: [
                { text: "Youth Council Programs (Local Government)", url: "https://www.ncl.org/engaging-youth" },
                { text: "DoSomething.org", url: "https://www.dosomething.org/" }
            ]
        },
        "Anti-Racism Education & Dialogue": {
            fields: ["Sociology", "Education", "Ethnic Studies", "Counseling"],
            careers: ["Diversity & Inclusion Educator", "Social Justice Advocate", "Counselor", "Curriculum Developer"],
            exploreLinks: [
                { text: "National Equity Project", url: "https://nationalequityproject.org/" },
                { text: "Teaching Tolerance (Learning for Justice)", url: "https://www.learningforjustice.org/" }
            ]
        },
        "LGBTQ+ Rights & Support": {
            fields: ["Sociology", "Public Policy", "Social Work", "Community Health"],
            careers: ["LGBTQ+ Advocate", "Youth Counselor", "Non-Profit Program Manager", "Policy Analyst"],
            exploreLinks: [
                { text: "The Trevor Project", url: "https://www.thetrevorproject.org/" },
                { text: "GLSEN (Gay, Lesbian & Straight Education Network)", url: "https://www.glsen.org/" }
            ]
        },
        "Disability Rights & Inclusion": {
            fields: ["Disability Studies", "Advocacy", "Social Work", "Education"],
            careers: ["Disability Advocate", "Accessibility Consultant", "Special Education Teacher", "Social Worker"],
            exploreLinks: [
                { text: "Disability Rights Education & Defense Fund (DREDF)", url: "https://dredf.org/" },
                { text: "Autistic Self Advocacy Network (ASAN)", url: "https://autisticadvocacy.org/" }
            ]
        },
        "Non-Profit Management & Fundraising": {
            fields: ["Non-Profit Studies", "Business Administration", "Marketing", "Public Relations"],
            careers: ["Non-Profit Manager", "Fundraising Coordinator", "Grant Writer", "Volunteer Coordinator"],
            exploreLinks: [
                { text: "National Council of Nonprofits", url: "https://www.councilofnonprofits.org/" },
                { text: "Idealist.org (Jobs & Internships)", url: "https://www.idealist.org/" }
            ]
        },
        "Local Food Systems Development": {
            fields: ["Agriculture", "Community Development", "Public Policy", "Nutrition"],
            careers: ["Food Policy Analyst", "Community Food Organizer", "Sustainable Agriculture Specialist", "Farmer's Market Manager"],
            exploreLinks: [
                { text: "National Young Farmers Coalition", url: "https://www.youngfarmers.org/" },
                { text: "USDA Urban Agriculture", url: "https://www.farmers.gov/urban" }
            ]
        },
        "Human Rights Activism": {
            fields: ["International Relations", "Law", "Political Science", "Sociology"],
            careers: ["Human Rights Advocate", "Policy Researcher", "International Aid Worker", "Diplomat"],
            exploreLinks: [
                { text: "Amnesty International", url: "https://www.amnesty.org/en/get-involved/campaign/" },
                { text: "Human Rights Watch", url: "https://www.hrw.org/" }
            ]
        },
        "Social Justice Research": {
            fields: ["Sociology", "Political Science", "Anthropology", "Public Policy"],
            careers: ["Social Researcher", "Policy Analyst", "Academic (Sociology/Anthropology)", "Advocacy Analyst"],
            exploreLinks: [
                { text: "Poverty & Race Research Action Council (PRRAC)", url: "https://www.prrac.org/" },
                { text: "ACLU Research & Publications", url: "https://www.aclu.org/publications" }
            ]
        },
        "Community Organizing": {
            fields: ["Sociology", "Political Science", "Community Development", "Leadership"],
            careers: ["Community Organizer", "Advocacy Coordinator", "Union Organizer", "Campaign Manager"],
            exploreLinks: [
                { text: "Organizing for Action (OFA)", url: "https://www.organizingforaction.org/" },
                { text: "Midwest Academy (Training)", url: "https://midwestacademy.com/" }
            ]
        },
        "Global Development Initiatives": {
            fields: ["International Development", "Economics", "Public Health", "Environmental Studies"],
            careers: ["Development Worker", "Program Manager (INGO)", "Foreign Service Officer", "Researcher"],
            exploreLinks: [
                { text: "USAID Student Opportunities", url: "https://www.usaid.gov/careers/students" },
                { text: "The World Bank Youth Programs", url: "https://www.worldbank.org/en/about/careers/programs-and-internships" }
            ]
        },

        // Sports & Outdoor Adventure
        "Competitive Rock Climbing": {
            fields: ["Athletics", "Kinesiology", "Outdoor Recreation"],
            careers: ["Professional Climber", "Climbing Coach", "Route Setter", "Outdoor Educator"],
            exploreLinks: [
                { text: "USA Climbing", url: "https://usaclimbing.org/" },
                { text: "Local Climbing Gyms" }
            ]
        },
        "Martial Arts (e.g., Taekwondo, Judo)": {
            fields: ["Athletics", "Physical Education", "Self-Defense"],
            careers: ["Martial Arts Instructor", "Professional Fighter", "Fitness Coach"],
            exploreLinks: [
                { text: "USA Taekwondo", url: "https://www.teamusa.org/USA-Taekwondo" },
                { text: "USA Judo", url: "https://www.teamusa.org/USA-Judo" }
            ]
        },
        "Long-Distance Running & Marathons": {
            fields: ["Athletics", "Exercise Physiology", "Sports Nutrition"],
            careers: ["Professional Runner", "Running Coach", "Personal Trainer", "Sports Scientist"],
            exploreLinks: [
                { text: "USA Track & Field", url: "https://usatf.org/" },
                { text: "Local Running Clubs" }
            ]
        },
        "Ultimate Frisbee Strategy": {
            fields: ["Team Sports", "Sports Management"],
            careers: ["Ultimate Player", "Coach", "Sports Analyst", "Recreation Specialist"],
            exploreLinks: [
                { text: "USA Ultimate", url: "https://usaultimate.org/" },
                { text: "Local Ultimate Leagues" }
            ]
        },
        "Competitive Volleyball": {
            fields: ["Team Sports", "Athletics"],
            careers: ["Professional Volleyball Player", "Volleyball Coach", "Sports Recruiter"],
            exploreLinks: [
                { text: "USA Volleyball", url: "https://usavolleyball.org/" },
                { text: "Local Volleyball Clubs" }
            ]
        },
        "Water Polo Tactics": {
            fields: ["Aquatic Sports", "Team Sports"],
            careers: ["Water Polo Player", "Coach", "Swim Instructor"],
            exploreLinks: [
                { text: "USA Water Polo", url: "https://usawaterpolo.org/" },
                { text: "Local Swim/Water Polo Teams" }
            ]
        },
        "Backpacking & Wilderness Survival": {
            fields: ["Outdoor Recreation", "Environmental Studies", "Survival Skills"],
            careers: ["Wilderness Guide", "Park Ranger", "Outdoor Educator", "Search & Rescue"],
            exploreLinks: [
                { text: "National Outdoor Leadership School (NOLS)", url: "https://www.nols.edu/" },
                { text: "Boy Scouts/Girl Scouts of America (Venturing)", url: "https://www.scouting.org/programs/venturing/" }
            ]
        },
        "Birdwatching & Ornithology": {
            fields: ["Ornithology", "Ecology", "Environmental Science"],
            careers: ["Ornithologist", "Wildlife Biologist", "Conservationist", "Nature Tour Guide"],
            exploreLinks: [
                { text: "Audubon Society", url: "https://www.audubon.org/" },
                { text: "Cornell Lab of Ornithology", url: "https://www.birds.cornell.edu/" }
            ]
        },
        "Wilderness First Aid & Rescue": {
            fields: ["Emergency Medical Services", "Outdoor Leadership", "Healthcare"],
            careers: ["Wilderness EMT", "Search & Rescue Technician", "Outdoor Trip Leader"],
            exploreLinks: [
                { text: "NOLS Wilderness Medicine", url: "https://www.nols.edu/en/courses/wilderness-medicine/" },
                { text: "National Association for Search and Rescue (NASAR)", url: "https://nasar.org/" }
            ]
        },
        "Esports & Competitive Gaming": {
            fields: ["Gaming", "Sports Management", "Media Production", "Computer Science"],
            careers: ["Professional Gamer", "Esports Coach", "Shoutcaster/Commentator", "Game Analyst", "Streamer"],
            exploreLinks: [
                { text: "High School Esports League (HSEL)", url: "https://www.hsel.org/" },
                { text: "Collegiate Sports Management Councils", url: "https://nacda.com/sports/nacda/specials/sports-management-councils" } // Generic link
            ]
        },
        "Game Development Community": {
            fields: ["Game Design", "Computer Science", "Interactive Media"],
            careers: ["Game Developer", "Level Designer", "Community Manager (Gaming)", "Game Tester"],
            exploreLinks: [
                { text: "Game Developers Conference (GDC) Vault", url: "https://www.gdcvault.com/" },
                { text: "Itch.io (Indie Games)", url: "https://itch.io/" }
            ]
        },
        "Competitive Chess Strategy": {
            fields: ["Strategy", "Cognitive Science", "Mathematics"],
            careers: ["Chess Master/Coach", "Strategist (various fields)", "Problem Solver"],
            exploreLinks: [
                { text: "US Chess Federation", url: "https://new.uschess.org/" },
                { text: "Chess.com", url: "https://www.chess.com/play/online" }
            ]
        },
        "Parkour & Urban Movement": {
            fields: ["Physical Fitness", "Acrobatics", "Urban Planning"],
            careers: ["Parkour Instructor", "Stunt Performer", "Fitness Trainer"],
            exploreLinks: [
                { text: "American Parkour (APK)", url: "https://americanparkour.com/" },
                { text: "Local Parkour Gyms" }
            ]
        },
        "Yoga & Mindfulness in Sports": {
            fields: ["Yoga", "Mindfulness", "Sports Psychology", "Wellness"],
            careers: ["Yoga Instructor", "Mindfulness Coach", "Sports Psychologist Assistant"],
            exploreLinks: [
                { text: "Yoga Alliance", url: "https://www.yogaalliance.org/" },
                { text: "Mindful.org", url: "https://www.mindful.org/" }
            ]
        },
        "Cycling & Bike Repair": {
            fields: ["Mechanics", "Outdoor Recreation", "Sustainability"],
            careers: ["Bike Mechanic", "Cycling Coach", "Urban Planner (Bike-Friendly Cities)"],
            exploreLinks: [
                { text: "League of American Bicyclists", url: "https://bikeleague.org/" },
                { text: "Local Bike Shops (for workshops)" }
            ]
        },

        // Technology & Innovation
        "Web Development (Frontend/Backend)": {
            fields: ["Computer Science", "Software Engineering", "User Experience (UX) Design"],
            careers: ["Frontend Developer", "Backend Developer", "Full-Stack Developer", "UX/UI Designer"],
            exploreLinks: [
                { text: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
                { text: "The Odin Project", url: "https://www.theodinproject.com/" }
            ]
        },
        "Mobile App Creation (iOS/Android)": {
            fields: ["Computer Science", "Mobile Development", "Software Engineering"],
            careers: ["Mobile App Developer", "iOS Developer", "Android Developer"],
            exploreLinks: [
                { text: "Google Developers (Android)", url: "https://developer.android.com/courses" },
                { text: "Apple Developer (iOS)", url: "https://developer.apple.com/xcode/" }
            ]
        },
        "Game Design & Coding": {
            fields: ["Game Development", "Computer Science", "Interactive Media", "Digital Arts"],
            careers: ["Game Designer", "Game Programmer", "Level Designer", "Technical Artist"],
            exploreLinks: [
                { text: "Unity Learn", url: "https://learn.unity.com/" },
                { text: "Unreal Engine Learn", url: "https://www.unrealengine.com/en-US/onlinelearning-courses" }
            ]
        },
        "Drone Building & Piloting": {
            fields: ["Robotics", "Aeronautical Engineering", "Photography/Videography"],
            careers: ["Drone Engineer", "Commercial Drone Pilot", "Aerial Photographer"],
            exploreLinks: [
                { text: "Drone Pilot Institute", url: "https://dronepilotinstitute.com/" },
                { text: "Academy of Model Aeronautics (AMA)", url: "https://www.modelaircraft.org/" }
            ]
        },
        "Competitive Robotics": {
            fields: ["Robotics", "Engineering (Mechanical/Electrical)", "Computer Science"],
            careers: ["Robotics Engineer", "Automation Engineer", "Mechatronics Technician"],
            exploreLinks: [
                { text: "FIRST Robotics Competition", url: "https://www.firstinspires.org/robotics/frc" },
                { text: "VEX Robotics", url: "https://www.vexrobotics.com/" }
            ]
        },
        "Renewable Energy Systems Engineering": {
            fields: ["Environmental Engineering", "Electrical Engineering", "Sustainable Energy"],
            careers: ["Renewable Energy Engineer", "Solar Panel Installer", "Wind Turbine Technician", "Energy Consultant"],
            exploreLinks: [
                { text: "National Renewable Energy Laboratory (NREL)", url: "https://www.nrel.gov/careers/student-internships.html" },
                { text: "IRENA Youth", url: "https://www.irena.org/irena_youth" }
            ]
        },
        "Podcasting & Audio Production": {
            fields: ["Media Production", "Journalism", "Sound Engineering", "Broadcasting"],
            careers: ["Podcaster", "Audio Editor", "Sound Engineer", "Broadcast Journalist"],
            exploreLinks: [
                { text: "Transom (Audio Storytelling)", url: "https://transom.org/" },
                { text: "Anchor by Spotify (Easy Podcasting)", url: "https://anchor.fm/" }
            ]
        },
        "Video Editing & Filmmaking": {
            fields: ["Film Production", "Digital Media", "Visual Arts", "Storytelling"],
            careers: ["Video Editor", "Filmmaker", "Director of Photography", "Post-Production Specialist"],
            exploreLinks: [
                { text: "Adobe Premiere Pro Tutorials", url: "https://helpx.adobe.com/premiere-pro/tutorials.html" },
                { text: "Film Independent", url: "https://www.filmindependent.org/" }
            ]
        },
        "Photography & Digital Artistry": {
            fields: ["Photography", "Digital Arts", "Graphic Design", "Fine Arts"],
            careers: ["Photographer", "Digital Artist", "Photo Editor", "Visual Merchandiser"],
            exploreLinks: [
                { text: "Skillshare Photography Courses", url: "https://www.skillshare.com/browse/photography" },
                { text: "DeviantArt (Community)", url: "https://www.deviantart.com/" }
            ]
        },
        "Ethical Hacking & Penetration Testing": {
            fields: ["Cybersecurity", "Computer Science", "Network Security"],
            careers: ["Penetration Tester", "Security Analyst", "Ethical Hacker", "Cybersecurity Consultant"],
            exploreLinks: [
                { text: "Cybrary (Free Courses)", url: "https://www.cybrary.it/" },
                { text: "OWASP Foundation", url: "https://owasp.org/www-project-top-ten/" }
            ]
        },
        "Digital Forensics & Incident Response": {
            fields: ["Cybersecurity", "Law Enforcement", "Computer Science"],
            careers: ["Digital Forensics Analyst", "Incident Response Specialist", "Cyber Crime Investigator"],
            exploreLinks: [
                { text: "SANS Institute (Digital Forensics)", url: "https://www.sans.org/cyber-security-courses/digital-forensics-incident-response/" },
                { text: "NIST Computer Security Resource Center", url: "https://csrc.nist.gov/" }
            ]
        },
        "Network Security & Administration": {
            fields: ["Networking", "Cybersecurity", "Information Technology"],
            careers: ["Network Administrator", "Network Security Engineer", "System Administrator"],
            exploreLinks: [
                { text: "Cisco Networking Academy", url: "https://www.netacad.com/" },
                { text: "CompTIA Network+ Certification", url: "https://www.comptia.org/certifications/network" }
            ]
        },
        "Artificial Intelligence Ethics": {
            fields: ["Artificial Intelligence", "Philosophy", "Law", "Public Policy"],
            careers: ["AI Ethicist", "Policy Advisor (Tech)", "Tech Journalist", "Researcher"],
            exploreLinks: [
                { text: "AI Ethics Lab", url: "https://aiethicslab.com/" },
                { text: "Future of Life Institute (AI Safety)", url: "https://futureoflife.org/ai-safety/" }
            ]
        },
        "Data Science & Visualization": {
            fields: ["Data Science", "Statistics", "Computer Science", "Business Analytics"],
            careers: ["Data Scientist", "Data Analyst", "Business Intelligence Developer", "Machine Learning Engineer"],
            exploreLinks: [
                { text: "Kaggle (Data Science Competitions)", url: "https://www.kaggle.com/" },
                { text: "Coursera: Data Science", url: "https://www.coursera.org/browse/data-science" }
            ]
        },
        "Virtual Reality Development": {
            fields: ["Virtual Reality", "Game Design", "Computer Science", "3D Modeling"],
            careers: ["VR Developer", "AR/VR Engineer", "3D Artist", "Interactive Experience Designer"],
            exploreLinks: [
                { text: "Oculus Developer Resources", url: "https://developer.oculus.com/" },
                { text: "Unity VR Development", url: "https://unity.com/solutions/xr/vr" }
            ]
        },

        // Hobbies & Practical Skills
        "Pottery & Ceramics": {
            fields: ["Fine Arts", "Crafts", "Material Science"],
            careers: ["Ceramic Artist", "Potter", "Art Instructor", "Studio Assistant"],
            exploreLinks: [
                { text: "National Council on Education for the Ceramic Arts (NCECA)", url: "https://nceca.net/" },
                { text: "Local Pottery Studios/Classes" }
            ]
        },
        "Jewelry Making & Design": {
            fields: ["Crafts", "Product Design", "Small Business"],
            careers: ["Jewelry Designer", "Bench Jeweler", "Artisan", "Small Business Owner"],
            exploreLinks: [
                { text: "Ganoksin (Jewelry Making Articles)", url: "https://www.ganoksin.com/" },
                { text: "Etsy (For Selling Crafts)", url: "https://www.etsy.com/" }
            ]
        },
        "Upcycling & Sustainable Crafts": {
            fields: ["Sustainability", "Crafts", "Environmental Education"],
            careers: ["Eco-Designer", "Upcycling Artist", "Workshop Facilitator", "Environmental Advocate"],
            exploreLinks: [
                { text: "TerraCycle (Recycling Programs)", url: "https://www.terracycle.com/en-US/" },
                { text: "Instructables (DIY Projects)", url: "https://www.instructables.com/tag/upcycling/" }
            ]
        },
        "International Cuisine Cooking": {
            fields: ["Culinary Arts", "Hospitality", "Cultural Studies", "Nutrition"],
            careers: ["Chef", "Caterer", "Food Blogger", "Culinary Instructor", "Restaurant Owner"],
            exploreLinks: [
                { text: "Culinary Institute of America (CIA)", url: "https://www.ciachef.edu/" },
                { text: "Local Cooking Classes/Workshops" }
            ]
        },
        "Baking & Pastry Arts": {
            fields: ["Culinary Arts", "Hospitality", "Food Science"],
            careers: ["Baker", "Pastry Chef", "Chocolatier", "Food Entrepreneur"],
            exploreLinks: [
                { text: "King Arthur Baking Company (Recipes & Resources)", url: "https://www.kingarthurbaking.com/" },
                { text: "Local Bakeries (Internships/Apprenticeships)" }
            ]
        },
        "Food Photography & Styling": {
            fields: ["Photography", "Culinary Arts", "Marketing", "Visual Arts"],
            careers: ["Food Photographer", "Food Stylist", "Content Creator", "Marketing Specialist"],
            exploreLinks: [
                { text: "Food Photography School", url: "https://foodphotographyschool.com/" },
                { text: "Instagram Food Communities" }
            ]
        },
        "Learning Endangered Languages": {
            fields: ["Linguistics", "Anthropology", "Cultural Preservation", "Education"],
            careers: ["Linguist", "Language Revitalization Specialist", "Translator/Interpreter", "Cultural Anthropologist"],
            exploreLinks: [
                { text: "Endangered Language Fund", url: "https://endangeredlanguagefund.org/" },
                { text: "Living Tongues Institute for Endangered Languages", url: "https://www.livingtongues.org/" }
            ]
        },
        "Cultural Exchange Programs": {
            fields: ["International Relations", "Education", "Travel & Tourism", "Sociology"],
            careers: ["Program Coordinator (Exchange)", "Cultural Liaison", "Diplomat", "Tour Guide"],
            exploreLinks: [
                { text: "AFS Intercultural Programs", url: "https://www.afsusa.org/" },
                { text: "Rotary Youth Exchange", url: "https://www.rotary.org/our-programs/youth-exchanges" }
            ]
        },
        "Calligraphy & Hand Lettering": {
            fields: ["Graphic Design", "Fine Arts", "Crafts", "Visual Communication"],
            careers: ["Calligrapher", "Lettering Artist", "Graphic Designer", "Illustrator"],
            exploreLinks: [
                { text: "The Calligraphy Guild", url: "https://www.calligraphyguild.org/" },
                { text: "Skillshare Calligraphy Courses", url: "https://www.skillshare.com/browse/calligraphy" }
            ]
        },
        "Public Speaking & Debate": {
            fields: ["Communications", "Law", "Political Science", "Education"],
            careers: ["Lawyer", "Politician", "Journalist", "Educator", "Motivational Speaker"],
            exploreLinks: [
                { text: "National Speech & Debate Association", url: "https://www.speechanddebate.org/" },
                { text: "Toastmasters International", url: "https://www.toastmasters.org/" }
            ]
        },
        "Financial Literacy & Investing": {
            fields: ["Finance", "Economics", "Business Administration", "Personal Finance"],
            careers: ["Financial Advisor", "Investment Analyst", "Accountant", "Entrepreneur"],
            exploreLinks: [
                { text: "Khan Academy: Personal Finance", url: "https://www.khanacademy.org/college-careers-more/financial-literacy" },
                { text: "Investopedia", url: "https://www.investopedia.com/articles/basics/06/investorbasics.asp" }
            ]
        },
        "Mindfulness & Meditation Practices": {
            fields: ["Psychology", "Wellness", "Counseling", "Holistic Health"],
            careers: ["Mindfulness Coach", "Wellness Instructor", "Therapist Assistant", "Yoga Instructor"],
            exploreLinks: [
                { text: "Mindful.org", url: "https://www.mindful.org/" },
                { text: "Headspace App", url: "https://www.headspace.com/" }
            ]
        },
        "Genealogy & Family History Research": {
            fields: ["History", "Genealogy", "Archival Studies", "Sociology"],
            careers: ["Genealogist", "Archivist", "Historian", "Librarian"],
            exploreLinks: [
                { text: "Ancestry.com", url: "https://www.ancestry.com/" },
                { text: "FamilySearch.org", url: "https://www.familysearch.org/en/" }
            ]
        },
        "Urban Exploration & Photography": {
            fields: ["Photography", "Urban Studies", "History", "Adventure"],
            careers: ["Photographer", "Urban Planner (Research)", "Journalist", "Documentarian"],
            exploreLinks: [
                { text: "Atlas Obscura", url: "https://www.atlasobscura.com/" },
                { text: "Flickr Urban Exploration Groups", url: "https://www.flickr.com/groups/urbanexploration/pool/" }
            ]
        },
        "DIY Electronics & Robotics": {
            fields: ["Electronics", "Robotics", "Engineering", "Hobbyist Electronics"],
            careers: ["Electronics Technician", "Robotics Engineer", "Product Designer", "Hardware Developer"],
            exploreLinks: [
                { text: "SparkFun Electronics (Learning Resources)", url: "https://learn.sparkfun.com/" },
                { text: "Adafruit (DIY Tutorials)", url: "https://learn.adafruit.com/" }
            ]
        }
    };

    showPassionsBtn.addEventListener('click', () => {
        const selectedPassions = [];
        const checkboxes = document.querySelectorAll('input[name="passion"]:checked');

        checkboxes.forEach(checkbox => {
            selectedPassions.push(checkbox.value);
        });

        passionResultsContent.innerHTML = ''; // Clear previous content

        if (selectedPassions.length > 0) {
            noPassionsSelected.classList.add('hidden');
            selectedPassions.forEach(passionName => {
                const data = passionMapping[passionName];
                if (data) {
                    const card = document.createElement('div');
                    card.classList.add('passion-suggestion-card');

                    let fieldsHtml = data.fields.map(field => `<span>${field}</span>`).join('');
                    let careersHtml = data.careers.map(career => `<span>${career}</span>`).join('');
                    let exploreLinksHtml = data.exploreLinks.map(link =>
                        `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a>`
                    ).join('');

                    card.innerHTML = `
                        <h4>${passionName}</h4>
                        <p><strong>Related Fields:</strong> <div class="tags">${fieldsHtml}</div></p>
                        <p><strong>Potential Careers:</strong> <div class="tags">${careersHtml}</div></p>
                        <p><strong>Explore Further:</strong> <div class="explore-links">${exploreLinksHtml}</div></p>
                    `;
                    passionResultsContent.appendChild(card);
                }
            });
            passionReport.classList.remove('hidden');
        } else {
            passionReport.classList.remove('hidden');
            noPassionsSelected.classList.remove('hidden');
        }
    });

    // --- Extracurriculars Data (Sample Data) ---
    const extracurricularData = [
        {
            name: "Cultural Heritage Club",
            description: "Celebrate your cultural background and share it with others. Organize events, food festivals, and discussions.",
            state: "ALL", // Applicable nationwide as a general idea
            subject: "Arts",
            immigrantFriendly: true,
            contact: "YourSchoolClub@email.com"
        },
        {
            name: "Youth STEM Innovators",
            description: "Explore science, technology, engineering, and math through hands-on projects and competitions.",
            state: "CA",
            subject: "STEM",
            immigrantFriendly: false,
            contact: "info@steminnovators.org"
        },
        {
            name: "ESL Peer Tutoring",
            description: "Get help with English language skills from older students or volunteer tutors. Great for improving confidence!",
            state: "NY",
            subject: "ESL",
            immigrantFriendly: true,
            contact: "ESLTutoring@school.edu"
        },
        {
            name: "Community Garden Project",
            description: "Work with your community to grow fresh produce and learn about sustainable living.",
            state: "TX",
            subject: "Community Service",
            immigrantFriendly: true,
            contact: "localgarden@community.org"
        },
        {
            name: "Model United Nations (MUN)",
            description: "Develop public speaking, debate, and negotiation skills while discussing global issues.",
            state: "FL",
            subject: "Leadership",
            immigrantFriendly: false,
            contact: "munclub@school.edu"
        },
        {
            name: "Dreamer's Leadership Circle",
            description: "A leadership program specifically for undocumented and DACA students, focusing on advocacy and empowerment.",
            state: "CA",
            subject: "Leadership",
            immigrantFriendly: true,
            contact: "dreamerslead@org.com"
        },
        {
            name: "Robotics Team",
            description: "Design, build, and program robots for competitive challenges.",
            state: "IL",
            subject: "STEM",
            immigrantFriendly: false,
            contact: "robotics@school.org"
        },
        {
            name: "International Student Alliance",
            description: "Connect with other international and immigrant students, share experiences, and find support.",
            state: "MA",
            subject: "Community Service",
            immigrantFriendly: true,
            contact: "isa@university.edu"
        },
        {
            name: "High School Soccer Team",
            description: "Join your school's soccer team and connect with peers through sports.",
            state: "GA",
            subject: "Sports",
            immigrantFriendly: false,
            contact: "coach@school.com"
        },
        {
            name: "Local Library Homework Help",
            description: "A free program offered by local libraries providing academic assistance across various subjects.",
            state: "WA",
            subject: "Community Service",
            immigrantFriendly: false, // Not specifically for immigrants, but open to all
            contact: "yourlocalibrary.org"
        },
        {
            name: "Youth Mentorship Program (Local)",
            description: "Connect with adult mentors for academic and personal guidance.",
            state: "VA",
            subject: "Mentorship",
            immigrantFriendly: true,
            contact: "youthmentors@community.org"
        },
        {
            name: "Arts & Crafts Workshop",
            description: "Explore various artistic mediums and express your creativity. Often free and open to all.",
            state: "PA",
            subject: "Arts",
            immigrantFriendly: false,
            contact: "artcenter@city.gov"
        }
    ];

    // --- Scholarships Data (Sample Data) ---
    const scholarshipData = [
        {
            name: "Hispanic Scholarship Fund (HSF)",
            description: "Provides scholarships to students of Hispanic heritage. Offers additional support services.",
            state: "NATIONAL",
            subject: "Any",
            status: "Any Status",
            ethnicity: "Hispanic, Latino, or Spanish",
            gpa: "3.0",
            type: "Academic Achievement",
            link: "https://www.hsf.net/"
        },
        {
            name: "Esperanza Education Fund",
            description: "Supports immigrant students in the DMV (DC, MD, VA) metropolitan area.",
            state: "VA",
            subject: "Any",
            status: "Any Status",
            ethnicity: "Any",
            gpa: "2.5",
            type: "Need-Based",
            link: "https://www.esperanzafund.org/"
        },
        {
            name: "Que Llueva Café Scholarship",
            description: "Scholarship for undocumented students, emphasizing personal stories and community commitment.",
            state: "NATIONAL",
            subject: "Any",
            status: "Any Status", // Covers undocumented
            ethnicity: "Hispanic, Latino, or Spanish",
            gpa: "3.0",
            type: "Community Service",
            link: "https://ca-core.org/programs/que-llueva-cafe-scholarship/"
        },
        {
            name: "Jack Kent Cooke Foundation College Scholarship",
            description: "Prestigious scholarship for high-achieving high school seniors with significant financial need. Open to all eligible students, including immigrants.",
            state: "NATIONAL",
            subject: "Any",
            status: "Permanent Resident",
            ethnicity: "Any",
            gpa: "3.5",
            type: "Merit-Based",
            link: "https://www.jkcf.org/our-scholarships/college-scholarship-program/"
        },
        {
            name: "California Dream Act Service Incentive Grant Program",
            description: "Grants for California Dream Act applicants who volunteer in community service.",
            state: "CA",
            subject: "Community Service",
            status: "Any Status", // Covers Undocumented, DACA
            ethnicity: "Any",
            gpa: "2.5",
            type: "Community Service",
            link: "https://www.csac.ca.gov/california-dream-act-service-incentive-grant-program"
        },
    ];

    // --- Awards Data (NEW Sample Data) ---
    const awardData = [
        {
            name: "Congressional Award",
            description: "A non-partisan program recognizing initiative, service, and achievement in young people. Open to all US youth.",
            type: "Leadership",
            subject: "Any",
            gpa: "Any",
            immigrantSpecific: false,
            link: "https://www.congressionalaward.org/"
        },
        {
            name: "Regeneron Science Talent Search",
            description: "The nation's oldest and most prestigious science and math competition for high school seniors.",
            type: "Academic",
            subject: "Science",
            gpa: "3.5",
            immigrantSpecific: false,
            link: "https://www.societyforscience.org/regeneron-sts/"
        },
        {
            name: "Scholastic Art & Writing Awards",
            description: "The nation’s longest-running and most prestigious recognition program for creative teens.",
            type: "Arts",
            subject: "Arts",
            gpa: "Any",
            immigrantSpecific: false,
            link: "https://www.artandwriting.org/"
        },
        {
            name: "National Merit Scholarship Program (Commended/Finalist)",
            description: "Recognizes academically talented high school students based on PSAT/NMSQT scores.",
            type: "Academic",
            subject: "Any",
            gpa: "3.5", // Implied high GPA
            immigrantSpecific: false,
            link: "https://www.nationalmerit.org/"
        },
    ];


    // --- Filter and Render Functions ---

    const extracurricularListDiv = document.getElementById('extracurricularList');
    const noExtracurricularsMsg = document.getElementById('noExtracurriculars');
    const scholarshipListDiv = document.getElementById('scholarshipList');
    const noScholarshipsMsg = document.getElementById('noScholarships');
    const awardListDiv = document.getElementById('awardList'); // NEW
    const noAwardsMsg = document.getElementById('noAwards'); // NEW

    function renderItems(data, listContainer, noResultsMessage, itemType) {
        listContainer.innerHTML = ''; // Clear previous items
        if (data.length === 0) {
            noResultsMessage.classList.remove('hidden');
            return;
        }
        noResultsMessage.classList.add('hidden');

        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('item-card');

            let tagsHtml = '';

            // Common tags (State/Subject are common across all sample data types, but could be specific)
            if (item.state) {
                tagsHtml += `<span>State: ${item.state === 'NATIONAL' ? 'National' : item.state}</span>`;
            }
            if (item.subject) {
                tagsHtml += `<span>Subject: ${item.subject}</span>`;
            }

            // Tags specific to Extracurriculars
            if (itemType === 'extracurricular' && item.immigrantFriendly !== undefined) {
                if (item.immigrantFriendly) tagsHtml += `<span>Immigrant Focused</span>`;
            }

            // Tags specific to Scholarships
            if (itemType === 'scholarship') {
                if (item.status && item.status !== "Any Status") {
                    tagsHtml += `<span>Status: ${item.status}</span>`;
                }
                if (item.ethnicity && item.ethnicity !== "Any") {
                    // Split ethnicity string if it contains multiple for individual tags
                    const ethnicities = item.ethnicity.split(', ').map(e => `<span>Ethnicity: ${e}</span>`).join('');
                    tagsHtml += ethnicities;
                }
                if (item.gpa && item.gpa !== "Any") {
                    tagsHtml += `<span>GPA: ${item.gpa}+</span>`;
                }
                if (item.type) {
                    tagsHtml += `<span>Type: ${item.type}</span>`;
                }
            }

            // Tags specific to Awards (NEW)
            if (itemType === 'award') {
                if (item.type) {
                    tagsHtml += `<span>Type: ${item.type}</span>`;
                }
                if (item.gpa && item.gpa !== "Any") {
                    tagsHtml += `<span>GPA: ${item.gpa}+</span>`;
                }
                if (item.immigrantSpecific) {
                    tagsHtml += `<span>Immigrant Specific</span>`;
                }
            }


            card.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="tags">${tagsHtml}</div>
                ${item.link ? `<a href="${item.link}" target="_blank" class="bg-blue-500 text-white text-sm py-2 px-4 rounded-md inline-block mt-2 hover:bg-blue-600 transition duration-200">Learn More</a>` : ''}
                ${item.contact ? `<p class="text-sm text-gray-500 mt-2">Contact: ${item.contact}</p>` : ''}
            `;
            listContainer.appendChild(card);
        });
    }

    function filterExtracurriculars() {
        const stateFilter = document.getElementById('extracurricularStateFilter').value;
        const subjectFilter = document.getElementById('extracurricularSubjectFilter').value;
        const immigrantFriendlyChecked = document.getElementById('immigrantFriendlyFilter').checked;

        const filtered = extracurricularData.filter(item => {
            const matchesState = (stateFilter === "" || item.state === "ALL" || item.state === stateFilter);
            const matchesSubject = (subjectFilter === "" || item.subject === subjectFilter);
            const matchesImmigrantFriendly = (!immigrantFriendlyChecked || item.immigrantFriendly);
            return matchesState && matchesSubject && matchesImmigrantFriendly;
        });
        renderItems(filtered, extracurricularListDiv, noExtracurricularsMsg, 'extracurricular');
    }

    function filterScholarships() {
        const stateFilter = document.getElementById('scholarshipStateFilter').value;
        const subjectFilter = document.getElementById('scholarshipSubjectFilter').value;
        const statusFilter = document.getElementById('scholarshipStatusFilter').value;
        const ethnicityFilter = document.getElementById('ethnicityFilter').value;
        const gpaFilter = document.getElementById('gpaFilter').value;
        const typeFilter = document.getElementById('scholarshipTypeFilter').value;

        const filtered = scholarshipData.filter(item => {
            const matchesState = (stateFilter === "" || item.state === "NATIONAL" || item.state === "ALL" || item.state === stateFilter);
            const matchesSubject = (subjectFilter === "" || item.subject === "Any" || item.subject === subjectFilter);

            // Immigration Status Filter: Check if the item's status includes the filter value or is "Any Status"
            const matchesStatus = (statusFilter === "" || item.status === "Any Status" || item.status.includes(statusFilter));

            // Ethnicity Filter: Check if the item's ethnicity includes the filter value or is "Any"
            // Handles cases where an item might apply to multiple ethnicities (e.g., "Black or African American, Asian")
            const matchesEthnicity = (ethnicityFilter === "" || item.ethnicity === "Any" || (item.ethnicity && item.ethnicity.includes(ethnicityFilter)));

            // GPA Filter: If filter is "Any GPA", it always matches. Otherwise, check if item's GPA is >= filter GPA
            // Ensure item.gpa is treated as a number for comparison
            const matchesGPA = (gpaFilter === "" || gpaFilter === "Any" || (item.gpa && parseFloat(item.gpa) >= parseFloat(gpaFilter)));

            // Scholarship Type Filter
            const matchesType = (typeFilter === "" || item.type === typeFilter);


            return matchesState && matchesSubject && matchesStatus && matchesEthnicity && matchesGPA && matchesType;
        });
        renderItems(filtered, scholarshipListDiv, noScholarshipsMsg, 'scholarship');
    }

    // NEW: Filter Awards Function
    function filterAwards() {
        const typeFilter = document.getElementById('awardTypeFilter').value;
        const subjectFilter = document.getElementById('awardSubjectFilter').value;
        const gpaFilter = document.getElementById('awardGpaFilter').value;
        const immigrantSpecificChecked = document.getElementById('immigrantSpecificAwardFilter').checked;

        const filtered = awardData.filter(item => {
            const matchesType = (typeFilter === "" || item.type === typeFilter);
            const matchesSubject = (subjectFilter === "" || item.subject === "Any" || item.subject === subjectFilter);
            const matchesGPA = (gpaFilter === "" || gpaFilter === "Any" || (item.gpa && parseFloat(item.gpa) >= parseFloat(gpaFilter)));
            const matchesImmigrantSpecific = (!immigrantSpecificChecked || item.immigrantSpecific);
            return matchesType && matchesSubject && matchesGPA && matchesImmigrantSpecific;
        });
        renderItems(filtered, awardListDiv, noAwardsMsg, 'award');
    }


    // Initial render on page load
    filterExtracurriculars();
    filterScholarships();
    filterAwards(); // NEW: Initial render for awards

    // Add event listeners for filters
    document.getElementById('extracurricularStateFilter').addEventListener('change', filterExtracurriculars);
    document.getElementById('extracurricularSubjectFilter').addEventListener('change', filterExtracurriculars);
    document.getElementById('immigrantFriendlyFilter').addEventListener('change', filterExtracurriculars);

    document.getElementById('scholarshipStateFilter').addEventListener('change', filterScholarships);
    document.getElementById('scholarshipSubjectFilter').addEventListener('change', filterScholarships);
    document.getElementById('scholarshipStatusFilter').addEventListener('change', filterScholarships);
    document.getElementById('ethnicityFilter').addEventListener('change', filterScholarships);
    document.getElementById('gpaFilter').addEventListener('change', filterScholarships);
    document.getElementById('scholarshipTypeFilter').addEventListener('change', filterScholarships);

    // NEW: Event listeners for Award filters
    document.getElementById('awardTypeFilter').addEventListener('change', filterAwards);
    document.getElementById('awardSubjectFilter').addEventListener('change', filterAwards);
    document.getElementById('awardGpaFilter').addEventListener('change', filterAwards);
    document.getElementById('immigrantSpecificAwardFilter').addEventListener('change', filterAwards);


    // --- Mentorship Modal Logic ---
    const mentorshipModal = document.getElementById('mentorshipModal');
    const openMentorshipModalBtn = document.getElementById('openMentorshipModalBtn');
    const closeMentorshipModalBtn = document.getElementById('closeMentorshipModalBtn');
    const mentorshipForm = document.getElementById('mentorshipForm');
    const mentorshipConfirmation = document.getElementById('mentorshipConfirmation');

    // Log to confirm elements are found
    console.log('Mentorship Modal Elements:', {
        mentorshipModal,
        openMentorshipModalBtn,
        closeMentorshipModalBtn,
        mentorshipForm,
        mentorshipConfirmation
    });

    if (openMentorshipModalBtn) {
        openMentorshipModalBtn.addEventListener('click', () => {
            console.log('Open Mentorship Modal button clicked.');
            if (mentorshipModal) {
                mentorshipModal.classList.remove('hidden');
                mentorshipConfirmation.classList.add('hidden'); // Hide confirmation on re-open
                mentorshipForm.reset(); // Clear form on re-open
                console.log('Mentorship modal opened.');
            } else {
                console.error('Mentorship modal element not found!');
            }
        });
    } else {
        console.error('Open Mentorship Modal button not found!');
    }

    if (closeMentorshipModalBtn) {
        closeMentorshipModalBtn.addEventListener('click', () => {
            console.log('Close Mentorship Modal button clicked.');
            if (mentorshipModal) {
                mentorshipModal.classList.add('hidden');
                console.log('Mentorship modal closed.');
            } else {
                console.error('Mentorship modal element not found when trying to close!');
            }
        });
    } else {
        console.error('Close Mentorship Modal button not found!');
    }


    // Close modal if user clicks outside of it
    if (mentorshipModal) {
        mentorshipModal.addEventListener('click', (event) => {
            if (event.target === mentorshipModal) {
                console.log('Clicked outside mentorship modal, closing.');
                mentorshipModal.classList.add('hidden');
            }
        });
    }

    if (mentorshipForm) {
        mentorshipForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            console.log('Mentorship Form submit event triggered.');

            // In a real application, you would send this data to a server (e.g., using fetch API)
            // For this example, we'll just show a confirmation message.
            console.log('Mentorship Form Submitted Data:');
            console.log('Name:', document.getElementById('mentorName').value);
            console.log('Email:', document.getElementById('mentorEmail').value);
            console.log('Interests:', document.getElementById('mentorInterests').value);

            // Show confirmation message
            if (mentorshipConfirmation) {
                mentorshipConfirmation.classList.remove('hidden');
                console.log('Mentorship confirmation message shown.');
            } else {
                console.error('Mentorship confirmation element not found!');
            }


            // Optionally, hide the form after submission, or just show the confirmation
            // mentorshipForm.classList.add('hidden');
            // You might disable the submit button or clear inputs if you want to allow re-submission easily
            const submitButton = mentorshipForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                setTimeout(() => {
                    submitButton.disabled = false;
                    console.log('Mentorship submit button re-enabled.');
                }, 3000); // Re-enable after 3 seconds
            }
        });
    } else {
        console.error('Mentorship Form element not found!');
    }
});