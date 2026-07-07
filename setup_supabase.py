import requests
import json

# The token provided by the user
ACCESS_TOKEN = "sbp_cf5a60c8c24b770867c0bd5f51f0ac1b8d6b4d37"

def get_projects():
    url = "https://api.supabase.com/v1/projects"
    headers = {
        "Authorization": f"Bearer {ACCESS_TOKEN}",
        "Content-Type": "application/json"
    }
    
    try:
        print("Authenticating with Supabase Management API...")
        response = requests.get(url, headers=headers)
        
        if response.status_code == 200:
            projects = response.json()
            print(f"Successfully connected! Found {len(projects)} projects.")
            
            for p in projects:
                print(f"\nProject Name: {p.get('name')}")
                print(f"Project ID (ref): {p.get('id')}")
                print(f"Status: {p.get('status')}")
                print(f"Region: {p.get('region')}")
                # We construct the URL based on the ID usually: https://<id>.supabase.co
                print(f"Calculated URL: https://{p.get('id')}.supabase.co")
                
            return projects
        else:
            print(f"Failed to fetch projects. Status: {response.status_code}")
            print(f"Response: {response.text}")
            return None
            
    except Exception as e:
        print(f"Error: {e}")
        return None

if __name__ == "__main__":
    get_projects()
