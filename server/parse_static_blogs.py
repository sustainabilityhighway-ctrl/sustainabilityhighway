import re
import json

def parse_blogs():
    with open('staticBlogs.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to extract the JSON objects in the STATIC_BLOGS array.
    # A simple regex to find the blocks starting with { and having id: or "id":
    # Let's find all occurrences of "id": or id: in the file.
    matches = re.finditer(r'(id|"\bid\b")\s*:\s*(\d+)', content)
    
    blogs = []
    for match in matches:
        start_idx = match.start()
        # Find the title, slug, and image_url around this start_idx
        # Let's search forward from start_idx for title, slug, image_url
        substring = content[start_idx:start_idx + 1000]
        
        id_val = match.group(2)
        
        title_match = re.search(r'"title"\s*:\s*"([^"]+)"', substring)
        if not title_match:
            title_match = re.search(r'title\s*:\s*"([^"]+)"', substring)
            
        slug_match = re.search(r'"slug"\s*:\s*"([^"]+)"', substring)
        if not slug_match:
            slug_match = re.search(r'slug\s*:\s*"([^"]+)"', substring)
            
        img_match = re.search(r'"image_url"\s*:\s*"([^"]+)"', substring)
        if not img_match:
            img_match = re.search(r'image_url\s*:\s*"([^"]+)"', substring)
            
        title = title_match.group(1) if title_match else "Unknown"
        slug = slug_match.group(1) if slug_match else "Unknown"
        img = img_match.group(1) if img_match else "Unknown"
        
        blogs.append({
            "id": int(id_val),
            "title": title,
            "slug": slug,
            "image_url": img
        })
        
    print(json.dumps(blogs, indent=2))

if __name__ == '__main__':
    parse_blogs()
