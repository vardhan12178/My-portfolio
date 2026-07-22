from __future__ import annotations

import argparse
from pathlib import Path

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


INK = colors.HexColor("#172033")
TEXT = colors.HexColor("#2D3748")
MUTED = colors.HexColor("#606B7A")
ACCENT = colors.HexColor("#B95536")
RULE = colors.HexColor("#D9DFE8")
SOFT = colors.HexColor("#F4F6F9")
WHITE = colors.white


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=23,
            leading=26,
            textColor=INK,
            spaceAfter=1.5 * mm,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.2,
            leading=12,
            textColor=ACCENT,
            spaceAfter=2.2 * mm,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.15,
            leading=10.6,
            textColor=MUTED,
            spaceAfter=0.5 * mm,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.2,
            leading=11,
            textColor=INK,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.65,
            leading=11.25,
            textColor=TEXT,
        ),
        "skills": ParagraphStyle(
            "Skills",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.45,
            leading=11.25,
            textColor=TEXT,
        ),
        "entry": ParagraphStyle(
            "Entry",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9.2,
            leading=11.3,
            textColor=INK,
        ),
        "entry_right": ParagraphStyle(
            "EntryRight",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.05,
            leading=10.5,
            textColor=MUTED,
            alignment=TA_RIGHT,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.9,
            leading=10.1,
            textColor=MUTED,
            spaceAfter=0.8 * mm,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.35,
            leading=10.65,
            textColor=TEXT,
            leftIndent=4.2 * mm,
            firstLineIndent=0,
            bulletIndent=1.1 * mm,
            bulletFontName="Helvetica-Bold",
            bulletFontSize=7.5,
            spaceAfter=0.45 * mm,
        ),
    }


def section_heading(label: str, styles, width: float):
    heading = Table(
        [[Paragraph(label.upper(), styles["section"]), ""]],
        colWidths=[35 * mm, width - 35 * mm],
        hAlign="LEFT",
    )
    heading.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5 * mm),
                ("LINEBELOW", (0, 0), (-1, -1), 0.65, RULE),
                ("LINEBELOW", (0, 0), (0, 0), 1.65, ACCENT),
            ]
        )
    )
    return [Spacer(1, 3.4 * mm), heading, Spacer(1, 1.6 * mm)]


def entry_header(title: str, date: str, styles, width: float):
    table = Table(
        [[Paragraph(title, styles["entry"]), Paragraph(date, styles["entry_right"])]],
        colWidths=[width - 40 * mm, 40 * mm],
        hAlign="LEFT",
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def bullet(text: str, styles):
    # An ASCII hyphen extracts cleanly for applicant tracking systems.
    return Paragraph(text, styles["bullet"], bulletText="-")


def add_top_rule(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(ACCENT)
    canvas.rect(doc.leftMargin, A4[1] - 13.5 * mm, doc.width, 1.2 * mm, fill=1, stroke=0)
    canvas.restoreState()


def build_resume(output_path: Path):
    output_path.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=16.5 * mm,
        rightMargin=16.5 * mm,
        topMargin=18.5 * mm,
        bottomMargin=12.5 * mm,
        title="Bala Vardhan Pula - Full-stack Developer",
        author="Bala Vardhan Pula",
        subject="Full-stack Developer Resume",
    )
    styles = build_styles()
    story = []

    story.extend(
        [
            Paragraph("BALA VARDHAN PULA", styles["name"]),
            Paragraph("FULL-STACK DEVELOPER", styles["role"]),
            Paragraph(
                '<link href="tel:+919542312181" color="#606B7A">+91 95423 12181</link>'
                ' &nbsp;|&nbsp; <link href="mailto:balavardhanpula@gmail.com" color="#606B7A">balavardhanpula@gmail.com</link>'
                " &nbsp;|&nbsp; Hyderabad, India",
                styles["contact"],
            ),
            Paragraph(
                '<link href="https://balavardhan.dev" color="#B95536">balavardhan.dev</link>'
                ' &nbsp;|&nbsp; <link href="https://linkedin.com/in/bala-vardhan-pula-753b011b9" color="#606B7A">linkedin.com/in/bala-vardhan-pula-753b011b9</link>'
                ' &nbsp;|&nbsp; <link href="https://github.com/vardhan12178" color="#606B7A">github.com/vardhan12178</link>',
                styles["contact"],
            ),
        ]
    )

    story.extend(section_heading("Summary", styles, doc.width))
    story.append(
        Paragraph(
            "Full-stack developer with 4+ years of experience building production web applications with React, Next.js, Node.js, Express, and MongoDB. Experienced in delivering complete features across user interfaces, APIs, authentication, payments, databases, and deployment.",
            styles["body"],
        )
    )

    story.extend(section_heading("Skills", styles, doc.width))
    skills = Table(
        [
            [Paragraph("<b>Frontend</b>", styles["skills"]), Paragraph("React, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux", styles["skills"])],
            [Paragraph("<b>Backend</b>", styles["skills"]), Paragraph("Node.js, Express, REST APIs, JWT, Stripe, Razorpay", styles["skills"])],
            [Paragraph("<b>Data &amp; Tools</b>", styles["skills"]), Paragraph("MongoDB, MySQL, Redis, AWS, Git", styles["skills"])],
        ],
        colWidths=[28 * mm, doc.width - 28 * mm],
        hAlign="LEFT",
    )
    skills.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), SOFT),
                ("TEXTCOLOR", (0, 0), (0, -1), INK),
                ("LEFTPADDING", (0, 0), (0, -1), 3.5 * mm),
                ("LEFTPADDING", (1, 0), (1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3.5 * mm),
                ("TOPPADDING", (0, 0), (-1, 0), 2.2 * mm),
                ("TOPPADDING", (0, 1), (-1, -1), 0.55 * mm),
                ("BOTTOMPADDING", (0, -1), (-1, -1), 2.2 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -2), 0.55 * mm),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ]
        )
    )
    story.append(skills)

    story.extend(section_heading("Experience", styles, doc.width))
    story.append(entry_header("Full-stack Developer | HR Geckos", "Oct 2024 - Present", styles, doc.width))
    story.append(Paragraph("Product Engineering", styles["meta"]))
    story.extend(
        [
            bullet("Built an employee handbook platform from database design to responsive UI, including PDF generation and employee acknowledgement tracking.", styles),
            bullet("Created multi-step policy review and publishing workflows with role-based access control.", styles),
            bullet("Integrated Stripe subscriptions, checkout, invoices, webhooks, payment history, and refunds.", styles),
            bullet("Strengthened validation and authorization across payment, policy, invoice, and employee workflows.", styles),
        ]
    )
    story.append(Spacer(1, 1.5 * mm))
    story.append(entry_header("Full-stack Developer | Tata Consultancy Services (TCS)", "Dec 2021 - Jun 2024", styles, doc.width))
    story.append(Paragraph("Enterprise Solutions", styles["meta"]))
    story.extend(
        [
            bullet("Built reusable React components and business dashboards connected to REST APIs.", styles),
            bullet("Managed application state with Redux and React Hooks across data-heavy dashboards.", styles),
            bullet("Improved page speed through lazy loading, code splitting, and more efficient API usage.", styles),
            bullet("Worked with cross-functional teams to debug issues and deliver stable production features.", styles),
        ]
    )

    story.extend(section_heading("Projects", styles, doc.width))
    story.append(
        entry_header(
            'VKart - Full-stack E-commerce Platform | <link href="https://vkart.balavardhan.dev" color="#B95536">Live site</link>',
            "Personal project",
            styles,
            doc.width,
        )
    )
    story.append(Paragraph("React, Node.js, Express, MongoDB, Redis, Razorpay", styles["meta"]))
    story.extend(
        [
            bullet("Built a responsive shopping experience with product search, filters, wishlist, cart, checkout, and order tracking.", styles),
            bullet("Implemented JWT and Google login, optional two-step verification, protected routes, and user profiles.", styles),
            bullet("Created admin tools for products, stock, orders, coupons, sales, reviews, and settings, and integrated Razorpay and wallet payments with backend verification.", styles),
            bullet("Added AI-powered product search using semantic search and retrieval-augmented generation (RAG).", styles),
        ]
    )
    story.append(Spacer(1, 1.5 * mm))
    image_magic = KeepTogether(
        [
            entry_header(
                'Image Magic Pro - Browser Image Tool | <link href="https://img.balavardhan.dev" color="#B95536">Live site</link>',
                "Personal project",
                styles,
                doc.width,
            ),
            Paragraph("Next.js, Node.js, Sharp", styles["meta"]),
            bullet("Built a browser tool for batch image conversion and light editing, with server-side processing and multi-file downloads.", styles),
        ]
    )
    story.append(image_magic)

    story.extend(section_heading("Education", styles, doc.width))
    story.append(entry_header("B.Tech in Electronics and Communication Engineering", "2020", styles, doc.width))
    story.append(Paragraph("Lakireddy Bali Reddy College of Engineering | CGPA: 7.7/10", styles["meta"]))

    doc.build(story, onFirstPage=add_top_rule, onLaterPages=add_top_rule)

    reader = PdfReader(str(output_path))
    if len(reader.pages) != 1:
        raise RuntimeError(f"Expected a one-page resume, generated {len(reader.pages)} pages")


def main():
    parser = argparse.ArgumentParser(description="Generate Bala Vardhan Pula's resume PDF.")
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("output/pdf/Bala_Vardhan_Resume.pdf"),
        help="Destination PDF path",
    )
    args = parser.parse_args()
    build_resume(args.output)
    print(args.output.resolve())


if __name__ == "__main__":
    main()
