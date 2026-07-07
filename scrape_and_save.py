import requests
from bs4 import BeautifulSoup
import json
import time

# List of competitor URLs to scrape
urls = [
    "https://salimus.com/blog/",
    "https://www.aesg.com/insights/",
    "https://leedksa.com/",
    "https://www.conservesolution.com/blog/",
    "https://www.erkeconsultancy.com/"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def scrape_and_save():
    all_data = []

    print("Scraping started... please wait.")
    
    for url in urls:
        site_data = {
            "source_url": url,
            "articles": []
        }
        
        try:
            print(f"Scanning {url}...")
            response = requests.get(url, headers=headers, timeout=15, verify=False)
            
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Logic to find article cards/titles
                # This is a generic approach to catch most blog structures
                possible_articles = soup.find_all(['h2', 'h3', 'h4'])
                
                for tag in possible_articles:
                    link = tag.find('a')
                    title = tag.get_text(strip=True)
                    
                    if link and len(title) > 15:
                        href = link.get('href')
                        if href and not href.startswith('http'):
                            # Handle relative URLs
                            base_url = "/".join(url.split('/')[:3]) 
                            href = base_url + href
                            
                        site_data["articles"].append({
                            "title": title,
                            "link": href
                        })
                    elif len(title) > 20 and not link:
                         # Capture titles that might not be links directly in the H tag
                         site_data["articles"].append({
                            "title": title,
                            "link": url  # fallback
                        })

                print(f"  -> Found {len(site_data['articles'])} items.")
                all_data.append(site_data)
                
            else:
                print(f"  -> Failed to access (Status: {response.status_code})")
                
        except Exception as e:
            print(f"  -> Error: {str(e)}")

    # Save to JSON file
    output_file = "competitor_data.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(all_data, f, indent=4, ensure_ascii=False)
        
    print(f"\nSUCCESS! All data saved to: {output_file}")

if __name__ == "__main__":
    import urllib3
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    scrape_and_save()
