import requests
from bs4 import BeautifulSoup
import time

# List of competitor URLs to scrape (Saudi focused + Vision 2030 relevance)
urls = [
    "https://salimus.com/blog/",
    "https://www.erkeconsultancy.com/", 
    "https://leedksa.com/",
    "https://www.conservesolution.com/",
    "https://www.aesg.com/insights/",
    "https://alpinme.com/blog/",
    "https://nenv.sa/",
    "https://greencovision.com/"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
}

def scrape_site(url):
    try:
        print(f"Scanning {url}...")
        response = requests.get(url, headers=headers, timeout=15, verify=False)
        
        if response.status_code == 403:
            print(f"Access Forbidden (403) for {url}")
            return

        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        title = soup.title.string.strip() if soup.title else "No Title"
        
        meta_desc_tag = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', property='og:description')
        description = meta_desc_tag['content'].strip() if meta_desc_tag else "No Meta Description"
        
        # Extract headings and look for keywords
        target_keywords = ['vision 2030', 'mostadam', 'leed', 'saudi', 'green building']
        found_keywords = set()
        
        text_content = soup.get_text().lower()
        for kw in target_keywords:
            if kw in text_content:
                found_keywords.add(kw)

        headings = []
        for tag in ['h1', 'h2', 'h3']:
            for item in soup.find_all(tag):
                text = item.get_text(strip=True)
                if text and len(text) > 5:
                    headings.append(text)
        
        print(f"\n--- RESULTS FOR {url} ---")
        print(f"PAGE TITLE: {title}")
        print(f"META DESC : {description}")
        print(f"FOUND KEYWORDS (Relevance): {', '.join(found_keywords)}")
        print(f"TOP HEADINGS:")
        for h in headings[:5]:
            print(f" - {h}")
        print("-" * 50)
        
    except Exception as e:
        print(f"Error scraping {url}: {e}")

if __name__ == "__main__":
    import urllib3
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    
    print("Starting Saudi Competitor Analysis for 'Vision 2030 LEED Mostadam'...\n")
    for url in urls:
        scrape_site(url)
        time.sleep(2)
