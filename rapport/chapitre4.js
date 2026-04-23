window.chapterFigures = window.chapterFigures || {};

window.chapterFigures.sqlScriptKidly = {
  title: "Script SQL de la base de données",
  caption: "Ce visuel présente le script SQL principal utilisé pour la création de la base de données Kidly.",
  src: "script_sql_kidly.png"
};

window.chapterFigures.testsPostmanKidly = {
  title: "Tests API avec Postman",
  caption: "Cette capture présente quelques tests réalisés avec Postman pour vérifier le bon fonctionnement des routes de l’API.",
  src: "tests_postman_kidly.png"
};

window.chapterFigures.architectureTechniqueKidly = {
  title: "Schéma de l’architecture technique",
  caption: "Ce schéma présente l’organisation technique générale de l’application Kidly.",
  src: "schema_architecture_technique.png"
};

window.chapterData.chapitre4 = {
  small: "Chapitre IV",
  title: "Outils et technologies utilisés",
  desc: "Ce chapitre présente les principaux outils et technologies utilisés dans la conception, le développement, les tests, la gestion des données et l’architecture technique de l’application Kidly.",
  body: `
    <div class="reader-section">
      <h4>IV.1 Introduction</h4>
      <p>
        Dans ce chapitre, nous présentons les principaux outils et technologies mobilisés dans la réalisation de l’application <strong>Kidly</strong>. Leur choix a été guidé par les besoins du projet, aussi bien au niveau de la conception des interfaces que du développement, de la gestion des données, des tests et de l’organisation technique de l’application.
      </p>
    </div>

    <div class="reader-section">
      <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap;">
        <div style="width:82px; height:82px; border-radius:50%; background:#f4eee7; display:flex; justify-content:center; align-items:center; overflow:hidden;">
          <img src="logo_figma.png" alt="Logo Figma" style="width:62%; height:62%; object-fit:contain;">
        </div>
        <div style="flex:1; min-width:260px;">
          <h4>IV.2 Figma</h4>
          <p>
            <strong>Figma</strong> a été utilisé durant la phase de conception de l’application. Cet outil nous a permis de préparer les maquettes, d’organiser les écrans et de définir l’apparence générale de l’interface avant de passer au développement.
          </p>
        </div>
      </div>
    </div>

    <div class="reader-section">
      <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap;">
        <div style="width:82px; height:82px; border-radius:50%; background:#f4eee7; display:flex; justify-content:center; align-items:center; overflow:hidden;">
          <img src="logo_flutter.png" alt="Logo Flutter" style="width:62%; height:62%; object-fit:contain;">
        </div>
        <div style="flex:1; min-width:260px;">
          <h4>IV.3 Flutter</h4>
          <p>
            <strong>Flutter</strong> a été utilisé pour le développement de la partie mobile de l’application. Ce framework nous a permis de construire une interface moderne, fluide et interactive, tout en gardant une bonne cohérence visuelle entre les différents écrans.
          </p>
        </div>
      </div>
    </div>

    <div class="reader-section">
      <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap;">
        <div style="width:82px; height:82px; border-radius:50%; background:#f4eee7; display:flex; justify-content:center; align-items:center; overflow:hidden;">
          <img src="logo_web.png" alt="Logo HTML CSS JavaScript" style="width:72%; height:72%; object-fit:contain;">
        </div>
        <div style="flex:1; min-width:260px;">
          <h4>IV.4 HTML, CSS et JavaScript</h4>
          <p>
            Pour la partie web du projet, nous avons utilisé <strong>HTML</strong>, <strong>CSS</strong> et <strong>JavaScript</strong>. HTML a servi à structurer les pages, CSS à définir la mise en forme et JavaScript à ajouter les comportements dynamiques nécessaires à l’interactivité de l’interface web.
          </p>
        </div>
      </div>
    </div>

    <div class="reader-section">
      <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap;">
        <div style="width:82px; height:82px; border-radius:50%; background:#f4eee7; display:flex; justify-content:center; align-items:center; overflow:hidden;">
          <img src="logo_nodejs.png" alt="Logo Node.js" style="width:62%; height:62%; object-fit:contain;">
        </div>
        <div style="flex:1; min-width:260px;">
          <h4>IV.5 Node.js</h4>
          <p>
            <strong>Node.js</strong> a été utilisé pour la partie serveur de l’application. Il nous a permis d’exécuter le backend, de gérer la logique côté serveur et d’assurer la communication entre l’application et la base de données.
          </p>
        </div>
      </div>
    </div>

    <div class="reader-section">
      <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap;">
        <div style="width:82px; height:82px; border-radius:50%; background:#f4eee7; display:flex; justify-content:center; align-items:center; overflow:hidden;">
          <img src="logo_express.png" alt="Logo Express.js" style="width:62%; height:62%; object-fit:contain;">
        </div>
        <div style="flex:1; min-width:260px;">
          <h4>IV.6 Express.js</h4>
          <p>
            <strong>Express.js</strong> a été utilisé comme framework backend avec Node.js. Il a permis de structurer les routes, de simplifier la gestion des requêtes et des réponses, et d’organiser plus clairement les services du serveur.
          </p>
        </div>
      </div>
    </div>

    <div class="reader-section">
      <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap;">
        <div style="width:82px; height:82px; border-radius:50%; background:#f4eee7; display:flex; justify-content:center; align-items:center; overflow:hidden;">
          <img src="logo_mysql.png" alt="Logo MySQL" style="width:70%; height:70%; object-fit:contain;">
        </div>
        <div style="flex:1; min-width:260px;">
          <h4>IV.7 MySQL</h4>
          <p>
            <strong>MySQL</strong> a été utilisé comme système de gestion de base de données. Il a servi à stocker les comptes utilisateurs, les enfants, les offres, les demandes, les inscriptions, les paiements, les messages et les autres informations nécessaires au fonctionnement de l’application.
          </p>

          <div class="diagram-actions">
            <button class="diagram-btn" data-figure="sqlScriptKidly">Voir le script SQL</button>
          </div>
        </div>
      </div>
    </div>

    <div class="reader-section">
      <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap;">
        <div style="width:82px; height:82px; border-radius:50%; background:#f4eee7; display:flex; justify-content:center; align-items:center; overflow:hidden;">
          <img src="logo_postman.png" alt="Logo Postman" style="width:62%; height:62%; object-fit:contain;">
        </div>
        <div style="flex:1; min-width:260px;">
          <h4>IV.8 Postman</h4>
          <p>
            <strong>Postman</strong> a été utilisé pour tester les routes de l’API et vérifier le bon fonctionnement des échanges entre le backend et les interfaces de l’application. Cet outil nous a permis de contrôler les requêtes envoyées au serveur et de valider plusieurs fonctionnalités avant leur intégration complète.
          </p>

          <div class="diagram-actions">
            <button class="diagram-btn" data-figure="testsPostmanKidly">Voir les tests API</button>
          </div>
        </div>
      </div>
    </div>

    <div class="reader-section">
      <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap;">
        <div style="width:82px; height:82px; border-radius:50%; background:#f4eee7; display:flex; justify-content:center; align-items:center; overflow:hidden;">
          <img src="logo_api_rest.png" alt="Logo API REST" style="width:62%; height:62%; object-fit:contain;">
        </div>
        <div style="flex:1; min-width:260px;">
          <h4>IV.9 API REST de l’application</h4>
          <p>
            L’application <strong>Kidly</strong> repose sur une <strong>API REST</strong> développée avec Node.js et Express.js. Cette API joue un rôle central dans le système, car elle assure la communication entre les interfaces de l’application et la base de données. Elle permet de gérer l’authentification, les crèches, les enfants, les demandes d’inscription, les paiements, les messages et les notifications.
          </p>
        </div>
      </div>
    </div>

    <div class="reader-section">
      <div style="display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap;">
        <div style="width:82px; height:82px; border-radius:50%; background:#f4eee7; display:flex; justify-content:center; align-items:center; overflow:hidden;">
          <img src="logo_architecture.png" alt="Logo Architecture technique" style="width:62%; height:62%; object-fit:contain;">
        </div>
        <div style="flex:1; min-width:260px;">
          <h4>IV.10 Architecture technique</h4>
          <p>
            Sur le plan technique, l’application suit une organisation de type <strong>MVC</strong>. La partie <strong>Vue</strong> correspond aux interfaces visibles par l’utilisateur, notamment l’application mobile Flutter et la partie web réalisée avec HTML, CSS et JavaScript. La partie <strong>Contrôleur</strong> prend en charge la logique des traitements à travers Node.js et Express.js, tandis que la partie <strong>Modèle</strong> concerne la gestion des données dans MySQL.
          </p>

          <div class="diagram-actions">
            <button class="diagram-btn" data-figure="architectureTechniqueKidly">Voir le schéma de l’architecture technique</button>
          </div>
        </div>
      </div>
    </div>

    <div class="reader-section">
      <h4>IV.11 Conclusion</h4>
      <p>
        À travers ce chapitre, nous avons présenté les principaux outils et technologies utilisés dans la réalisation de l’application <strong>Kidly</strong>. Chacun d’eux a joué un rôle précis dans la conception, le développement, les tests, la gestion des données et l’organisation technique du projet.
      </p>
    </div>
  `
};
