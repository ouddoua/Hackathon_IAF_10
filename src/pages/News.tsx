import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Ensure motion is imported

// Apify Dataset API with CORS Proxy
const API_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(
  "https://api.apify.com/v2/datasets/fg1JFeB4D2sQxoXGE/items?token=apify_api_KN3ammcdvlHKzdig0RiVBorSTsRlJl3PqrOy"
)}`;

const News = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(API_URL);
        const json = JSON.parse(response.data.contents); // Parse JSON from proxy
        setPosts(json);
      } catch (err) {
        setError("Failed to fetch Instagram posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading posts...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos réseaux sociaux</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Découvrez nos derniers posts sur Instagram.
        </p>
      </motion.div>

      <div style={styles.grid}>
        {posts.map((post, index) => (
          <motion.div
            key={index}
            style={styles.postCard}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Display Image */}
            {post.displayUrl ? (
              <img
                src={post.displayUrl}
                alt={post.caption}
                style={styles.image}
                referrerPolicy="no-referrer"
                onError={(e) => (e.target.style.display = "none")}
              />
            ) : null}
            {/* Instagram Embed API as Fallback */}
            <InstagramEmbed postUrl={post.url} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Instagram Embed Component (Fallback if images are blocked)
const InstagramEmbed = ({ postUrl }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={postUrl}
      data-instgrm-version="14"
    ></blockquote>
  );
};

// CSS-in-JS Styling
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive grid (3 columns)
    gap: "20px",
  },
  postCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
  },
  caption: {
    fontSize: "14px",
    margin: "10px 0",
  },
  viewLink: {
    display: "inline-block",
    marginTop: "5px",
    color: "#0073e6",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default News;
