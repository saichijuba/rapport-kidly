window.chapterData.chapitre2 = {
  small: "Chapitre II",
  title: "Analyse",
  desc: "Ce chapitre présente l’analyse du projet Kidly, les limites des démarches habituelles, les résultats du questionnaire et les principaux éléments qui structurent le système.",
  body: `
    <div class="reader-section">
      <h4>II.1 Introduction</h4>
      <p>
        Dans ce chapitre, nous présentons l’analyse du projet <strong>Kidly</strong>. Cette étape permet de mieux comprendre le besoin auquel répond la plateforme, d’identifier les limites des démarches habituelles et de préciser les principaux éléments qui structurent le système.
      </p>
    </div>

    <div class="reader-section">
      <h4>II.2 Problématique</h4>
      <p>
        Dans le domaine de la petite enfance, plusieurs démarches entre les parents et les crèches privées restent encore peu centralisées. La recherche d’un établissement, l’accès aux informations utiles, la constitution du dossier d’inscription, le suivi des demandes et la communication avec la crèche se font souvent de manière dispersée.
      </p>
      <p>
        Cette situation rend le parcours moins clair pour les parents et complique également la gestion du côté des crèches. Le projet <strong>Kidly</strong> vise donc à rassembler ces opérations dans un environnement unique, plus simple et plus structuré.
      </p>
    </div>

    <div class="reader-section">
      <h4>II.3 Critique de l’existant</h4>
      <p>
        Dans les pratiques classiques, la recherche d’une crèche repose encore souvent sur la visite directe, les recommandations de proches ou des recherches fragmentées sur Internet. Ces méthodes peuvent fournir certaines informations, mais elles restent limitées.
      </p>
      <p>
        Les parents rencontrent souvent des difficultés pour obtenir des informations fiables, comparer plusieurs crèches, connaître les modalités d’inscription ou suivre clairement l’avancement de leurs démarches. Ainsi, l’existant met en évidence un besoin réel de modernisation, notamment en matière d’accès à l’information, de comparaison et de communication.
      </p>
    </div>

    <div class="reader-section">
      <h4>II.4 Étude par questionnaire</h4>
      <p>
        Afin de mieux cerner les attentes des utilisateurs, un questionnaire en ligne a été diffusé auprès de plusieurs répondants. Cette enquête a permis de recueillir des avis sur les difficultés rencontrées lors de la recherche d’une crèche, l’intérêt pour une application de type parent–crèche et les fonctionnalités jugées les plus utiles.
      </p>
      <p>
        Les résultats ont montré un intérêt marqué pour une telle solution. Ils ont également fait ressortir plusieurs besoins importants, notamment la messagerie avec la crèche, l’inscription en ligne, la comparaison entre établissements, la consultation des documents et le suivi de certaines informations liées à l’enfant.
      </p>
    </div>

  
    <div class="reader-section">
      <h4>Figure 1 — Intérêt pour l’application</h4>
      <div style="margin-top:14px; text-align:center;">
        <img src="figure_interet_application_kidly.png" alt="Intérêt pour l’application Kidly" style="max-width:100%; height:auto; border-radius:18px; border:1px solid rgba(0,0,0,.08); box-shadow:0 8px 24px rgba(0,0,0,.08);">
        <p style="margin-top:10px; font-size:14px; color:#6f665d;">
          Ce graphique montre qu’une très grande majorité des répondants se déclare intéressée par une application de gestion parent–crèche.
        </p>
      </div>
    </div>

    <div class="reader-section">
      <h4>Figure 2— Fonctionnalités les plus souhaitées</h4>
      <div style="margin-top:14px; text-align:center;">
        <img src="figure_fonctionnalites_kidly.png" alt="Fonctionnalités les plus souhaitées" style="max-width:100%; height:auto; border-radius:18px; border:1px solid rgba(0,0,0,.08); box-shadow:0 8px 24px rgba(0,0,0,.08);">
        <p style="margin-top:10px; font-size:14px; color:#6f665d;">
          Les résultats mettent surtout en avant la messagerie avec la crèche, le suivi des activités, l’inscription en ligne et la comparaison entre établissements.
        </p>
      </div>
    </div>

    <div class="reader-section">
      <h4>II.5 Identification des acteurs</h4>
      <p>
        Le fonctionnement de la plateforme repose principalement sur trois acteurs : le parent, la crèche privée et l’administrateur.
      </p>
    </div>

    <div class="subparts">
      <div class="subpart">
        <strong>Le parent</strong>
        Il recherche une crèche, consulte les offres et effectue les démarches d’inscription.
      </div>

      <div class="subpart">
        <strong>La crèche privée</strong>
        Elle publie ses offres, traite les demandes et communique avec les familles.
      </div>

      <div class="subpart">
        <strong>L’administrateur</strong>
        Il assure la supervision générale de la plateforme.
      </div>
    </div>

    <div class="reader-section">
      <h4>II.6 Identification des espaces</h4>
      <p>
        La plateforme s’organise autour de trois espaces principaux : l’espace parent, l’espace crèche et l’espace administrateur.
      </p>
    </div>

    <div class="reader-section">
      <h4>II.7 Diagramme de contexte</h4>
      <p>
        Le diagramme de contexte présente <strong>Kidly</strong> comme le noyau central du système. Il montre les relations principales entre la plateforme et ses trois acteurs : le parent, la crèche privée et l’administrateur.
      </p>
    </div>
<div class="reader-section">
      <h4>Figure 3 — Diagramme de contexte de la plateforme Kidly</h4>
      <div style="margin-top:14px; text-align:center;">
        <img src="diagramme_contexte_kidly.png" alt="Diagramme de contexte Kidly" style="max-width:100%; height:auto; border-radius:18px; border:1px solid rgba(0,0,0,.08); box-shadow:0 8px 24px rgba(0,0,0,.08);">
        <p style="margin-top:10px; font-size:14px; color:#6f665d;">
          Le diagramme de contexte présente Kidly comme noyau central du système, en relation avec le parent, la crèche privée et l’administrateur.
        </p>
      </div>
    </div>
    <div class="reader-section">
      <h4>II.8 Conclusion</h4>
      <p>
        Ce chapitre a permis de mettre en évidence le besoin auquel répond le projet <strong>Kidly</strong>, ainsi que les principales limites du fonctionnement traditionnel. L’étude menée a confirmé l’intérêt d’une telle plateforme et a permis de mieux cerner les attentes des futurs utilisateurs.
      </p>
    </div>
  `
};