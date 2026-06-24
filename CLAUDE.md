# Avocat Web

Next.js 16 website for a Romanian law firm. TypeScript + Tailwind CSS v4.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Radix UI
- **Animations**: Framer Motion

## Commands

```bash
npm run dev      # start dev server
npm run build    # production build
npm run lint     # ESLint
```

## Structure

```
src/
  app/           # Next.js App Router pages
  components/    # React components (Navbar, Hero, Footer, etc.)
  lib/           # Utilities
```

## MarkItDown

[MarkItDown](https://github.com/microsoft/markitdown) is used to convert documents (PDF, Word, HTML) to Markdown for content ingestion.

### Install

```bash
pip install markitdown
```

Or from source:

```bash
git clone https://github.com/microsoft/markitdown.git
cd markitdown
pip install -e .
```

### Usage

```bash
# Convert a file to Markdown
markitdown document.pdf > output.md
markitdown document.docx > output.md

# Python API
python -c "
from markitdown import MarkItDown
md = MarkItDown()
result = md.convert('document.pdf')
print(result.text_content)
"
```
