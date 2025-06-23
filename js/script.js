document.addEventListener('DOMContentLoaded', () => {
    // --- Passion Discovery Logic (Checkbox-based) ---
    const showPassionsBtn = document.getElementById('showPassionsBtn');
    const passionReport = document.getElementById('passionReport');
    const passionList = document.getElementById('passionList');
    const noPassionsSelected = document.getElementById('noPassionsSelected');

    showPassionsBtn.addEventListener('click', () => {
        const selectedPassions = [];
        const checkboxes = document.querySelectorAll('input[name="passion"]:checked');

        checkboxes.forEach(checkbox => {
            selectedPassions.push(checkbox.value);
        });

        passionList.innerHTML = ''; // Clear previous list

        if (selectedPassions.length > 0) {
            selectedPassions.forEach(passion => {
                const listItem = document.createElement('li');
                listItem.textContent = passion;
                passionList.appendChild(listItem);
            });
            passionReport.classList.remove('hidden');
            noPassionsSelected.classList.add('hidden');
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
            name: "TheDream.US Scholarship",
            description: "Largest college access and success program for undocumented immigrant youth. Offers national and opportunity scholarships.",
            state: "NATIONAL",
            subject: "Any",
            status: "Undocumented, DACA",
            link: "https://www.thedream.us/scholarships/"
        },
        {
            name: "Hispanic Scholarship Fund (HSF)",
            description: "Provides scholarships to students of Hispanic heritage. Offers additional support services.",
            state: "NATIONAL",
            subject: "Any",
            status: "Any Immigrant Status",
            link: "https://www.hsf.net/"
        },
        {
            name: "Golden Door Scholars",
            description: "Supports undocumented students interested in pursuing higher education and dream careers.",
            state: "NATIONAL",
            subject: "Any",
            status: "Undocumented",
            link: "https://goldendoorscholars.org/"
        },
        {
            name: "Esperanza Education Fund",
            description: "Supports immigrant students in the DMV (DC, MD, VA) metropolitan area.",
            state: "VA",
            subject: "Any",
            status: "Any Immigrant Status",
            link: "https://www.esperanzafund.org/"
        },
        {
            name: "Que Llueva Café Scholarship",
            description: "Scholarship for undocumented students, emphasizing personal stories and community commitment.",
            state: "NATIONAL",
            subject: "Any",
            status: "Undocumented",
            link: "https://ca-core.org/programs/que-llueva-cafe-scholarship/"
        },
        {
            name: "Jack Kent Cooke Foundation College Scholarship",
            description: "Prestigious scholarship for high-achieving high school seniors with significant financial need. Open to all eligible students, including immigrants.",
            state: "NATIONAL",
            subject: "Any",
            status: "Any Status",
            link: "https://www.jkcf.org/our-scholarships/college-scholarship-program/"
        },
        {
            name: "Fred S. Findling Scholarship (Michigan)",
            description: "One-time scholarship for immigrants currently enrolled in college/university in Michigan.",
            state: "MI",
            subject: "Any",
            status: "Any Immigrant Status",
            link: "https://theprobatepro.com/fred-s-findling-scholarship/" // Placeholder, actual link might vary
        },
         {
            name: "California Dream Act Service Incentive Grant Program",
            description: "Grants for California Dream Act applicants who volunteer in community service.",
            state: "CA",
            subject: "Community Service",
            status: "Undocumented, DACA",
            link: "https://www.csac.ca.gov/california-dream-act-service-incentive-grant-program"
        },
        {
            name: "STEM Immigrant Scholarship",
            description: "Supports immigrant students pursuing degrees in Science, Technology, Engineering, and Mathematics.",
            state: "ALL", // Represents a general STEM scholarship available to immigrants nationwide
            subject: "STEM",
            status: "Any Immigrant Status",
            link: "https://placehold.co/link/STEMScholarship"
        },
        {
            name: "Arts for New Voices Grant",
            description: "A grant for immigrant students interested in pursuing arts, music, or theater.",
            state: "NY",
            subject: "Arts",
            status: "Any Immigrant Status",
            link: "https://placehold.co/link/ArtsGrant"
        }
    ];

    // --- Filter and Render Functions ---

    const extracurricularListDiv = document.getElementById('extracurricularList');
    const noExtracurricularsMsg = document.getElementById('noExtracurriculars');
    const scholarshipListDiv = document.getElementById('scholarshipList');
    const noScholarshipsMsg = document.getElementById('noScholarships');

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
            if (item.state && item.state !== 'ALL' && item.state !== 'NATIONAL') {
                tagsHtml += `<span>State: ${item.state}</span>`;
            } else if (item.state === 'ALL' || item.state === 'NATIONAL') {
                tagsHtml += `<span>National</span>`;
            }
            if (item.subject) {
                tagsHtml += `<span>Subject: ${item.subject}</span>`;
            }
            if (item.immigrantFriendly !== undefined) {
                if (item.immigrantFriendly) tagsHtml += `<span>Immigrant Focused</span>`;
            }
            if (item.status) {
                tagsHtml += `<span>Status: ${item.status}</span>`;
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

        const filtered = scholarshipData.filter(item => {
            const matchesState = (stateFilter === "" || item.state === "NATIONAL" || item.state === "ALL" || item.state === stateFilter);
            const matchesSubject = (subjectFilter === "" || item.subject === "Any" || item.subject === subjectFilter);
            const matchesStatus = (statusFilter === "" || item.status === statusFilter || item.status.includes(statusFilter) || item.status === "Any Immigrant Status" || item.status === "Any Status");
            return matchesState && matchesSubject && matchesStatus;
        });
        renderItems(filtered, scholarshipListDiv, noScholarshipsMsg, 'scholarship');
    }

    // Initial render on page load
    filterExtracurriculars();
    filterScholarships();

    // Add event listeners for filters
    document.getElementById('extracurricularStateFilter').addEventListener('change', filterExtracurriculars);
    document.getElementById('extracurricularSubjectFilter').addEventListener('change', filterExtracurriculars);
    document.getElementById('immigrantFriendlyFilter').addEventListener('change', filterExtracurriculars);

    document.getElementById('scholarshipStateFilter').addEventListener('change', filterScholarships);
    document.getElementById('scholarshipSubjectFilter').addEventListener('change', filterScholarships);
    document.getElementById('scholarshipStatusFilter').addEventListener('change', filterScholarships);

    // --- Mentorship Modal Logic ---
    const mentorshipModal = document.getElementById('mentorshipModal');
    const openMentorshipModalBtn = document.getElementById('openMentorshipModalBtn');
    const closeMentorshipModalBtn = document.getElementById('closeMentorshipModalBtn');
    const mentorshipForm = document.getElementById('mentorshipForm');
    const mentorshipConfirmation = document.getElementById('mentorshipConfirmation');

    openMentorshipModalBtn.addEventListener('click', () => {
        mentorshipModal.classList.remove('hidden');
        mentorshipConfirmation.classList.add('hidden'); // Hide confirmation on re-open
        mentorshipForm.reset(); // Clear form on re-open
    });

    closeMentorshipModalBtn.addEventListener('click', () => {
        mentorshipModal.classList.add('hidden');
    });

    // Close modal if user clicks outside of it
    mentorshipModal.addEventListener('click', (event) => {
        if (event.target === mentorshipModal) {
            mentorshipModal.classList.add('hidden');
        }
    });

    mentorshipForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // In a real application, you would send this data to a server (e.g., using fetch API)
        // For this example, we'll just show a confirmation message.
        console.log('Mentorship Form Submitted:');
        console.log('Name:', document.getElementById('mentorName').value);
        console.log('Email:', document.getElementById('mentorEmail').value);
        console.log('Interests:', document.getElementById('mentorInterests').value);

        // Show confirmation message
        mentorshipConfirmation.classList.remove('hidden');

        // Optionally, hide the form after submission, or just show the confirmation
        // mentorshipForm.classList.add('hidden');
        // You might disable the submit button or clear inputs if you want to allow re-submission easily
        mentorshipForm.querySelector('button[type="submit"]').disabled = true;
        setTimeout(() => {
            mentorshipForm.querySelector('button[type="submit"]').disabled = false;
        }, 3000); // Re-enable after 3 seconds
    });
});