const token = 'sbp_cf5a60c8c24b770867c0bd5f51f0ac1b8d6b4d37';

async function listProjects() {
    try {
        console.log('Fetching Supabase projects...');
        const response = await fetch('https://api.supabase.com/v1/projects', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const projects = await response.json();
            console.log('PROJECTS FOUND:', JSON.stringify(projects, null, 2));
        } else {
            console.log('Failed to fetch projects:', response.status, await response.text());
        }
    } catch (e) {
        console.error('Error fetching projects:', e);
    }
}

listProjects();
