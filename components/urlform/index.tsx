import { useState } from "react";
import styles from "../../styles/Urlform.module.scss";

interface UrlformProps {
  setShortUrl: (shortUrl: string) => void;
}

const Urlform: React.FC<UrlformProps> = ({ setShortUrl }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validUrl = (str: string) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validUrl(url)) {
      setError("Please enter a valid URL");
      setIsLoading(false);
    } else {
      try {
        const response = await fetch(
          "https://api.shrtco.de/v2/shorten?url=" + url
        );
        const data = await response.json();
        setShortUrl(data.result.short_link);
        setError("");
      } catch (err) {
        console.log(err.message);
      }
      setIsLoading(false);
    }
  };

  return (
  <>
    <form className={styles.Urlform} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a URL"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">{isLoading ? "Loading..." : "Shorten"}</button>
    </form>
    <p className={styles.error}>{error}</p>
    </>
  );
};

export default Urlform;
