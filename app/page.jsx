"use client";

import { useState } from "react";

const characters = [
  {
    id: 1,
    name: "Anaya",
    age: 20,
    role: "The Cold Classmate",
    personality: "Intelligent • Sarcastic • Secretly Caring",
    emoji: "👩🏻‍🎓",
    color: "#8b5cf6",
    description:
      "She is the smartest person in the class and rarely lets anyone get close.",
  },
  {
    id: 2,
    name: "Aarav",
    age: 21,
    role: "The Mysterious Senior",
    personality: "Calm • Mysterious • Protective",
    emoji: "🧑🏻‍🎓",
    color: "#2563eb",
    description:
      "A quiet senior who always seems to know more than he says.",
  },
  {
    id: 3,
    name: "Meera",
    age: 20,
    role: "Your Childhood Friend",
    personality: "Funny • Emotional • Loyal",
    emoji: "👩🏻",
    color: "#ec4899",
    description:
      "Your childhood friend who knows almost everything about you.",
  },
];
export default function Home() {
  const [selected, setSelected] = useState(null);

  function startStory(character) {
    setSelected(character);
  }

  function goBack() {
    setSelected(null);
  }

  if (selected) {
    return (
      <div style={styles.app}>
        <div style={styles.chatHeader}>
          <button onClick={goBack} style={styles.backButton}>
            ←
          </button>

          <div
            style={{
              ...styles.avatarSmall,
              background: selected.color,
            }}
          >
            {selected.emoji}
          </div>

          <div>
            <div style={styles.chatName}>{selected.name}</div>
            <div style={styles.online}>● Story Active</div>
          </div>
        </div>

        <main style={styles.chatBody}>
          <div style={styles.storyBadge}>CHAPTER 1</div>

          <div style={styles.characterMessage}>
            <div
              style={{
                ...styles.avatarMessage,
                background: selected.color,
              }}
            >
              {selected.emoji}
            </div>

            <div style={styles.bubble}>
              {selected.name === "Anaya"
                ? "You arrive late to class and find the only empty seat is next to Anaya. She looks at you and raises an eyebrow."
                : `You have just started a new chapter with ${selected.name}. What will you say?`}
            </div>
          </div>

          <div style={styles.relationshipBox}>
            <div style={styles.relationshipTitle}>
              Relationship
            </div>

            <div style={styles.stats}>
              <span>Trust 10</span>
              <span>Friendship 5</span>
              <span>Romance 0</span>
            </div>
          </div>
        </main>

        <div style={styles.inputArea}>
          <input
            placeholder={`Talk to ${selected.name}...`}
            style={styles.input}
          />
          <button style={styles.sendButton}>➤</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>✦</span>
          KahaaniAI
        </div>

        <button style={styles.profileButton}>
          👤
        </button>
      </header>

      <main style={styles.main}>
        <section style={styles.hero}>
          <div style={styles.badge}>
            ✨ YOUR STORY. YOUR CHOICES.
          </div>

          <h1 style={styles.heroTitle}>
            Stories that
            <br />
            <span style={styles.gradientText}>
              remember you.
            </span>
          </h1>

          <p style={styles.heroText}>
            Meet characters who remember your choices,
            emotions and relationships. Every conversation
            changes the story.
          </p>
        </section>

        <section>
          <h2 style={styles.sectionTitle}>
            Discover Characters
          </h2>

          <p style={styles.sectionSubtitle}>
            Choose someone and begin your story.
          </p>

          <div style={styles.characterGrid}>
            {characters.map((character) => (
              <div key={character.id} style={styles.card}>
                <div
                  style={{
                    ...styles.characterImage,
                    background: character.color,
                  }}
                >
                  <span style={styles.bigEmoji}>
                    {character.emoji}
                  </span>

                  <div style={styles.onlineDot}>●</div>
                </div>

                <div style={styles.cardContent}>
                  <div style={styles.nameRow}>
                    <h3 style={styles.characterName}>
                      {character.name}
                    </h3>

                    <span style={styles.age}>
                      {character.age}
                    </span>
                  </div>

                  <div style={styles.role}>
                    {character.role}
                  </div>

                  <p style={styles.personality}>
                    {character.personality}
                  </p>

                  <p style={styles.description}>
                    {character.description}
                  </p>

                  <button
                    onClick={() => startStory(character)}
                    style={styles.startButton}
                  >
                    Start Story
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#08080f",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    height: 64,
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #20202c",
    background: "#0b0b13",
  },

  logo: {
    fontSize: 21,
    fontWeight: "800",
  },

  logoIcon: {
    color: "#a855f7",
    marginRight: 8,
  },

  profileButton: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1px solid #30303d",
    background: "#151520",
    color: "white",
    fontSize: 18,
  },

  main: {
    maxWidth: 1050,
    margin: "auto",
    padding: "35px 18px 60px",
  },

  hero: {
    textAlign: "center",
    padding: "25px 0 55px",
  },

  badge: {
    display: "inline-block",
    padding: "8px 13px",
    borderRadius: 20,
    background: "#17121f",
    color: "#c084fc",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },

  heroTitle: {
    fontSize: "clamp(42px, 8vw, 72px)",
    lineHeight: 0.98,
    margin: "22px 0",
    letterSpacing: -2,
  },

  gradientText: {
    color: "#c084fc",
  },

  heroText: {
    maxWidth: 620,
    margin: "auto",
    color: "#9b9ba8",
    fontSize: 16,
    lineHeight: 1.6,
  },

  sectionTitle: {
    fontSize: 25,
    margin: 0,
  },

  sectionSubtitle: {
    color: "#777783",
    marginTop: 7,
    marginBottom: 20,
  },

  characterGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
    gap: 18,
  },

  card: {
    overflow: "hidden",
    border: "1px solid #252532",
    borderRadius: 22,
    background: "#101019",
  },

  characterImage: {
    height: 220,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  bigEmoji: {
    fontSize: 105,
  },

  onlineDot: {
    position: "absolute",
    right: 15,
    top: 15,
    color: "#4ade80",
    fontSize: 12,
  },

  cardContent: {
    padding: 20,
  },

  nameRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  characterName: {
    fontSize: 24,
    margin: 0,
  },

  age: {
    color: "#777783",
  },

  role: {
    color: "#c084fc",
    marginTop: 5,
    fontSize: 13,
    fontWeight: "600",
  },

  personality: {
    color: "#b7b7c2",
    fontSize: 13,
  },

  description: {
    color: "#858592",
    lineHeight: 1.5,
    fontSize: 14,
    minHeight: 65,
  },

  startButton: {
    width: "100%",
    padding: 13,
    borderRadius: 12,
    border: "none",
    background: "#7c3aed",
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },

  chatHeader: {
    height: 70,
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "0 15px",
    borderBottom: "1px solid #252532",
  },

  backButton: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: 27,
  },

  avatarSmall: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
  },

  chatName: {
    fontWeight: "700",
  },
  online: {
    color: "#4ade80",
    fontSize: 11,
    marginTop: 3,
  },
  chatBody: {
    maxWidth: 700,
    margin: "auto",
    padding: 20,
  },
  storyBadge: {
    textAlign: "center",
    color: "#777783",
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 25,
  },
  characterMessage: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
  },
  avatarMessage: {
    minWidth: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
  },
  bubble: {
    background: "#171720",
    border: "1px solid #292936",
    padding: "14px 16px",
    borderRadius: "5px 18px 18px 18px",
    lineHeight: 1.5,
    maxWidth: "75%",
  },
  relationshipBox: {
    marginTop: 40,
    padding: 18,
    borderRadius: 16,
    background: "#11111b",
    border: "1px solid #252532",
  },
  relationshipTitle: {
    fontWeight: "700",
    marginBottom: 12,
  },
  stats: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    color: "#a78bfa",
    fontSize: 12,
  },
  inputArea: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    background: "#0b0b13",
    borderTop: "1px solid #252532",
    display: "flex",
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    border: "1px solid #30303d",
    background: "#151520",
    color: "white",
    outline: "none",
  },
  sendButton: {
    width: 50,
    borderRadius: 12,
    border: "none",
    background: "#7c3aed",
    color: "white",
    fontSize: 20,
  },
};
