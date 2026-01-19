import json

# Load the scraped data
try:
    with open("competitor_data.json", "r", encoding="utf-8") as f:
        data = json.load(f)
except Exception as e:
    print(f"Error loading JSON: {e}")
    data = []

sql_statements = []

for site in data:
    source_url = site.get("source_url", "")
    for article in site.get("articles", []):
        title = article.get("title", "").replace("'", "''") # Escape single quotes
        link = article.get("link", "")
        # Add basic SQL insert
        # We start with is_published = true for now so they appear immediately
        sql = f"INSERT INTO public.blogs (title, link, source_url, is_published) VALUES ('{title}', '{link}', '{source_url}', true);"
        sql_statements.append(sql)

# Save to a file
with open("insert_blogs.sql", "w", encoding="utf-8") as f:
    f.write("\n".join(sql_statements))

print(f"Generated {len(sql_statements)} INSERT statements in insert_blogs.sql")
