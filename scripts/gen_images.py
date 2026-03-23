"""
Genera las imágenes SVG del libro.
Ejecutar desde la raíz del proyecto:

    python scripts/gen_images.py
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from pathlib import Path

# Directorios de salida
IMG_ANALISIS  = Path("docs/img/analisis")
IMG_COMPLEJOS = Path("docs/img/complejos")

# Estilo global: sin marcos, tipografía limpia
plt.rcParams.update({
    "font.family": "serif",
    "font.size": 11,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "figure.dpi": 150,
})


# ── Análisis ─────────────────────────────────────────────────────────────────

def desigualdad_trigonometrica():
    """
    Prueba geométrica de sin x ≤ x ≤ tan x para x ∈ (0, π/2).

    Compara tres áreas con x = π/5:
      - Triángulo OAP  → área = ½ sin x
      - Sector circular OAP → área = x/2
      - Triángulo OAT  → área = ½ tan x
    """
    x = np.pi / 5
    fig, ax = plt.subplots(figsize=(5, 5))

    # Círculo unitario (arco de 0 a π/2)
    theta = np.linspace(0, np.pi / 2, 300)
    ax.plot(np.cos(theta), np.sin(theta), color="#444", lw=1.4, zorder=3)

    # Puntos clave
    O = np.array([0, 0])
    A = np.array([1, 0])
    P = np.array([np.cos(x), np.sin(x)])
    T = np.array([1, np.tan(x)])

    # ── Área del triángulo OAP (azul claro) ──
    tri_OAP = plt.Polygon([O, A, P], closed=True,
                          facecolor="#aec6e8", edgecolor="none", alpha=0.7, zorder=1)
    ax.add_patch(tri_OAP)

    # ── Área del sector circular OAP (azul medio) ──
    sector_theta = np.linspace(0, x, 200)
    sector_x = np.concatenate([[0], np.cos(sector_theta), [0]])
    sector_y = np.concatenate([[0], np.sin(sector_theta), [0]])
    sector = plt.Polygon(list(zip(sector_x, sector_y)), closed=True,
                         facecolor="#5a9fd4", edgecolor="none", alpha=0.5, zorder=2)
    ax.add_patch(sector)

    # ── Área del triángulo OAT (azul oscuro, solo el triángulo exterior) ──
    tri_OAT = plt.Polygon([O, A, T], closed=True,
                          facecolor="#1a5fa8", edgecolor="none", alpha=0.25, zorder=0)
    ax.add_patch(tri_OAT)

    # ── Segmentos ──
    # OP
    ax.plot([O[0], P[0]], [O[1], P[1]], color="#444", lw=1.2, zorder=4)
    # OA
    ax.plot([O[0], A[0]], [O[1], A[1]], color="#444", lw=1.2, zorder=4)
    # OT
    ax.plot([O[0], T[0]], [O[1], T[1]], color="#444", lw=1.2, linestyle="--", zorder=4)
    # AT (tangente)
    ax.plot([A[0], T[0]], [A[1], T[1]], color="#888", lw=1.0, zorder=4)
    # Perpendicular desde P a eje x (sin x)
    ax.plot([P[0], P[0]], [0, P[1]], color="#c0392b", lw=1.2, linestyle=":", zorder=4)

    # ── Ángulo x ──
    arc = patches.Arc(O, 0.28, 0.28, angle=0, theta1=0, theta2=np.degrees(x),
                      color="#444", lw=1.0, zorder=5)
    ax.add_patch(arc)

    # ── Etiquetas ──
    ax.annotate("$O$", O, xytext=(-0.08, -0.06), fontsize=12)
    ax.annotate("$A = (1,0)$", A, xytext=(1.02, -0.07), fontsize=11)
    ax.annotate("$P = (\\cos x, \\sin x)$", P,
                xytext=(P[0] + 0.04, P[1] + 0.03), fontsize=10)
    ax.annotate("$T = (1, \\tan x)$", T,
                xytext=(1.03, T[1] - 0.02), fontsize=10)
    ax.annotate("$x$", xy=(0.17, 0.06), fontsize=11, color="#444")

    # Etiquetas de área
    ax.text(0.55, 0.08, "$\\frac{1}{2}\\sin x$",
            fontsize=10, color="#1a5fa8", ha="center")
    ax.text(0.38, 0.22, "$\\frac{x}{2}$",
            fontsize=10, color="#1a5fa8", ha="center")
    ax.text(0.78, 0.28, "$\\frac{1}{2}\\tan x$",
            fontsize=10, color="#1a5fa8", ha="center")

    # ── Ejes ──
    ax.axhline(0, color="#ccc", lw=0.8, zorder=0)
    ax.axvline(0, color="#ccc", lw=0.8, zorder=0)
    ax.set_xlim(-0.15, 1.45)
    ax.set_ylim(-0.15, 0.95)
    ax.set_aspect("equal")
    ax.axis("off")

    fig.tight_layout()
    out = IMG_ANALISIS / "desigualdad-trigonometrica.svg"
    fig.savefig(out, format="svg", bbox_inches="tight")
    plt.close(fig)
    print(f"  ✓ {out}")


# ── Main ──────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    print("Generando imágenes...")
    desigualdad_trigonometrica()
    print("Listo.")
