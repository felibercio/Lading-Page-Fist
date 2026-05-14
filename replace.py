import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for search, replace in replacements:
        content = content.replace(search, replace)
        
    with open(filepath, 'w') as f:
        f.write(content)

replace_in_file('src/index.css', [
    ('--color-fist-red: #E31B23;', '--color-fist-green: #4BE16E;'),
    ('--color-fist-red-hover: #C8151D;', '--color-fist-green-hover: #3AA953;')
])

replace_in_file('src/App.tsx', [
    ('fist-red-hover', 'fist-green-hover'),
    ('fist-red', 'fist-green'),
    ('red-50', 'green-50'),
    ('red-100', 'green-100')
])

print("Replacements completed.")
