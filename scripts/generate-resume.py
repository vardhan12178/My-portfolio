from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, black
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
    KeepTogether,
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
import os

OUT_PUBLIC = os.path.join("public", "Bala_Vardhan_Resume.pdf")
OUT_COPY = os.path.join("output", "pdf", "Bala_Vardhan_Resume.pdf")

accent = HexColor("#1a1a1a")
muted = HexColor("#444444")
line = HexColor("#cccccc")

styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Name",
        fontName="Helvetica-Bold",
        fontSize=18,
        leading=22,
        textColor=accent,
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        fontName="Helvetica",
        fontSize=11,
        leading=14,
        textColor=muted,
        spaceAfter=6,
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        textColor=muted,
        alignment=TA_CENTER,
        spaceAfter=8,
    )
)
styles.add(
    ParagraphStyle(
        name="Section",
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=13,
        textColor=accent,
        spaceBefore=8,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="Body",
        fontName="Helvetica",
        fontSize=9,
        leading=12,
        textColor=black,
        alignment=TA_JUSTIFY,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="JobTitle",
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=12,
        textColor=accent,
    )
)
styles.add(
    ParagraphStyle(
        name="JobMeta",
        fontName="Helvetica",
        fontSize=8.5,
        leading=11,
        textColor=muted,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="ResumeBullet",
        fontName="Helvetica",
        fontSize=9,
        leading=11.5,
        textColor=black,
        leftIndent=10,
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        name="ProjTitle",
        fontName="Helvetica-Bold",
        fontSize=9.5,
        leading=12,
        textColor=accent,
    )
)
styles.add(
    ParagraphStyle(
        name="Edu",
        fontName="Helvetica",
        fontSize=9,
        leading=12,
        textColor=black,
        spaceAfter=2,
    )
)


def section(title: str):
    return KeepTogether(
        [
            Paragraph(title, styles["Section"]),
            HRFlowable(
                width="100%",
                thickness=0.8,
                color=line,
                spaceBefore=0,
                spaceAfter=6,
            ),
        ]
    )


def bullet(text: str):
    return Paragraph(f"&bull; {text}", styles["ResumeBullet"])


def build_story():
    story = []
    story.append(Paragraph("BALA VARDHAN PULA", styles["Name"]))
    story.append(Paragraph("Full-stack Developer", styles["Role"]))
    story.append(
        Paragraph(
            "+91-9542312181 &nbsp;|&nbsp; balavardhanpula@gmail.com &nbsp;|&nbsp; Hyderabad, India<br/>"
            "Portfolio: https://balavardhan.dev &nbsp;|&nbsp; "
            "LinkedIn: linkedin.com/in/bala-vardhan-pula-753b011b9 &nbsp;|&nbsp; "
            "GitHub: github.com/vardhan12178",
            styles["Contact"],
        )
    )

    story.append(section("SUMMARY"))
    story.append(
        Paragraph(
            "Full-stack developer with 4+ years of experience building web applications with "
            "React, Next.js, Node.js, Express, and MongoDB. Comfortable owning features end to end - "
            "UI, APIs, auth, payments, and production delivery.",
            styles["Body"],
        )
    )

    story.append(section("SKILLS"))
    story.append(
        Paragraph(
            "<b>Frontend:</b> React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux<br/>"
            "<b>Backend:</b> Node.js, Express.js, REST APIs, JWT Auth, Stripe, Razorpay<br/>"
            "<b>Data &amp; Cloud:</b> MongoDB, MySQL, Redis, AWS, Git",
            styles["Body"],
        )
    )

    story.append(section("WORK EXPERIENCE"))

    story.append(Paragraph("Full-stack Developer - HR Geckos", styles["JobTitle"]))
    story.append(
        Paragraph(
            "Oct 2024 - Present &nbsp;|&nbsp; Product Engineering",
            styles["JobMeta"],
        )
    )
    for text in [
        "Built a multi-tenant employee handbook feature from database design to mobile-friendly UI, including PDF generation and acknowledgement tracking.",
        "Implemented multi-stage policy approval workflows with role-based access control for structured review and publishing.",
        "Integrated Stripe for subscriptions, embedded checkout, invoices, webhooks, payment history, and refunds.",
        "Added backend validation across payment, invoice, policy, and employee workflows to improve authorization and data integrity.",
        "Built responsive layouts and reusable UI components used across admin and business workflows.",
    ]:
        story.append(bullet(text))

    story.append(Spacer(1, 4))
    story.append(
        Paragraph(
            "Full-stack Developer - Tata Consultancy Services (TCS)",
            styles["JobTitle"],
        )
    )
    story.append(
        Paragraph(
            "Dec 2021 - Jun 2024 &nbsp;|&nbsp; Enterprise Solutions",
            styles["JobMeta"],
        )
    )
    for text in [
        "Built reusable React components and data-driven dashboards, integrating REST APIs for responsive enterprise interfaces.",
        "Implemented Redux and React Hooks for reliable client-side state across dashboards.",
        "Improved performance with lazy loading, code splitting, and efficient API usage.",
        "Collaborated with cross-functional teams to debug issues and ship stable production features.",
    ]:
        story.append(bullet(text))

    story.append(section("PROJECTS"))
    story.append(
        Paragraph(
            'VKart - Full-stack E-commerce Platform &nbsp;&nbsp;<font size="8" color="#555555">vkart.balavardhan.dev</font>',
            styles["ProjTitle"],
        )
    )
    story.append(
        Paragraph(
            "Personal project &nbsp;|&nbsp; React, Node.js, Express, MongoDB, Redis, Razorpay",
            styles["JobMeta"],
        )
    )
    for text in [
        "Built product listing, filters, wishlist, cart, checkout, and order tracking with a responsive storefront.",
        "Implemented JWT auth, Google OAuth, optional 2FA, protected routes, and profile management.",
        "Developed an admin dashboard for products, inventory, orders, coupons, sales, reviews, and settings.",
        "Integrated Razorpay and wallet checkout with backend payment verification.",
        "Added AI product discovery with semantic search and Retrieval-Augmented Generation for natural-language queries.",
    ]:
        story.append(bullet(text))

    story.append(Spacer(1, 3))
    story.append(
        Paragraph(
            'Image Magic Pro - Browser Image Tool &nbsp;&nbsp;<font size="8" color="#555555">img.balavardhan.dev</font>',
            styles["ProjTitle"],
        )
    )
    story.append(
        Paragraph(
            "Personal project &nbsp;|&nbsp; Next.js, Node.js, Sharp",
            styles["JobMeta"],
        )
    )
    story.append(
        bullet(
            "Built a Next.js tool for batch image conversion and light browser editing, "
            "with server-side Sharp processing and multi-file download support."
        )
    )

    story.append(section("EDUCATION"))
    story.append(
        Paragraph(
            "<b>B.Tech - Electronics and Communication Engineering</b> (2020)<br/>"
            "Lakireddy Bali Reddy College of Engineering &nbsp;|&nbsp; CGPA 7.7/10",
            styles["Edu"],
        )
    )
    return story


def write_pdf(path: str, story):
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    doc = SimpleDocTemplate(
        path,
        pagesize=A4,
        leftMargin=0.6 * inch,
        rightMargin=0.6 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.5 * inch,
        title="Bala Vardhan Pula - Resume",
        author="Bala Vardhan Pula",
    )
    doc.build(story)
    print("Wrote", path)


if __name__ == "__main__":
    content = build_story()
    write_pdf(OUT_PUBLIC, content)
    write_pdf(OUT_COPY, content)
