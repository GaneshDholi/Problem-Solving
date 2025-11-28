import os
from pdf2image import convert_from_path
import pytesseract
from docx import Document
from docx.enum.text import WD_BREAK

# If on Windows, set this to your installed path:
# pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

PDF_PATH = r"C:\Users\celebrare.in\Downloads\need changes on thi....pdf"        # <-- change this
OUTPUT_DOCX = "report_ocr.docx"      # output file

def pdf_to_docx(pdf_path, out_docx):
    doc = Document()
    pages = convert_from_path(pdf_path, dpi=300)

    for i, img in enumerate(pages, start=1):
        text = pytesseract.image_to_string(img, lang="eng")
        lines = [l for l in text.split("\n") if l.strip()]

        for line in lines:
            doc.add_paragraph(line.strip())

        # add page break between pages
        if i < len(pages):
            doc.add_page_break()

    doc.save(out_docx)
    print("Saved:", out_docx)

pdf_to_docx(PDF_PATH, OUTPUT_DOCX)
