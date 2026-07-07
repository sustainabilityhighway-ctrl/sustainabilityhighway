import requests
from bs4 import BeautifulSoup
import time

competitors = [
    {"name": "Salimus", "url": "https://salimus.com/blog/", "selectors": ["h3", "a.post-link", "div.blog-title"]},
    {"name": "Erke Design", "url": "https://www.erkeconsultancy.com/news/", "selectors": ["h4", "div.news-title"]},
    {"name": "AESG", "url": "https://www.aesg.com/insights/", "selectors": ["h3.entry-title", "div.insight-card h3"]},
    {"name": "Conserve Solution", "url": "https://www.conservesolution.com/blog/", "selectors": ["h2.entry-title", "h3", "div.post-content h5"]},
    {"name": "Alpin Limited", "url": "https://www.alpinme.com/blog/", "selectors": ["h2", "h3.elementor-post__title"]},
    {"name": "Eco-Structures (Saudi)", "url": "https://eco-structures.net/blog", "selectors": ["h2", "a.read-more"]},
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def count_blogs():
    total_articles = 0
    results = []

    print(f"{'COMPETITOR':<20} | {'STATUS':<10} | {'ARTICLES FOUND'}")
    print("-" * 50)

    for comp in competitors:
        try:
            response = requests.get(comp['url'], headers=headers, timeout=10, verify=False)
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Try finding articles based on common patterns or specific selectors
                articles = set()
                
                # Method 1: Specific selectors
                for selector in comp['selectors']:
                    elements = soup.select(selector)
                    for el in elements:
                        text = el.get_text(strip=True)
                        if len(text) > 10: # Filter out short titles
                            articles.add(text)
                
                # Method 2: Fallback to common 'article' tags if few results
                if len(articles) < 3:
                    for h in soup.find_all(['h2', 'h3']):
                        link = h.find('a')
                        if link:
                            text = link.get_text(strip=True)
                            if len(text) > 15:
                                articles.add(text)

                count = len(articles)
                total_articles += count
                results.append(f"{comp['name']:<20} | Success    | {count} articles")
                
                # Print a few examples
                # for a in list(articles)[:2]:
                #    print(f"   - {a}")
            else:
                results.append(f"{comp['name']:<20} | Failed ({response.status_code}) | 0")
        except Exception as e:
            results.append(f"{comp['name']:<20} | Error      | 0")
    
    print("\n".join(results))
    print("-" * 50)
    print(f"TOTAL POTENTIAL BLOG POSTS FOUND for Content: {total_articles}")

if __name__ == "__main__":
    import urllib3
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    count_blogs()
