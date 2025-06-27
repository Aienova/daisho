import React, { useEffect, useState } from 'react';

const WebsiteView: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/website-pages/home.html")
      .then(response => response.text())
      .then(html => setHtmlContent(html))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="origami-website">
      {loading ? null : htmlContent ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <div className="centralizer fullHeight">
          <div className="marger">
            <img className="logo" src="/media/images/origami.png" alt="Origami Logo" />
            <h1>Votre website vous attend avec Origami</h1>
            <a href="/origami/page-builder" className="button">Créer votre site web</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebsiteView;