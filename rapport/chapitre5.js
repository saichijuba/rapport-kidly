window.chapterFigures = window.chapterFigures || {};

window.chapterFigures.pageAccueil = {
  title: "Page d’accueil de l’application",
  caption: "Cette figure présente la page d’accueil de l’application Kidly.",
  src: "figure_page_accueil.png"
};

window.chapterFigures.authentification = {
  title: "Interface d’authentification",
  caption: "Cette figure présente l’interface d’authentification de l’application.",
  src: "figure_authentification.png"
};

window.chapterFigures.rechercheCreches = {
  title: "Recherche et consultation des crèches",
  caption: "Cette figure présente l’interface de recherche et de consultation des crèches.",
  src: "figure_recherche_creches.png"
};

window.chapterFigures.gestionEnfantsDocuments = {
  title: "Gestion des enfants et des documents",
  caption: "Cette figure présente l’interface de gestion des enfants et des documents.",
  src: "figure_gestion_enfants_documents.png"
};

window.chapterFigures.demandeInscription = {
  title: "Demande d’inscription",
  caption: "Cette figure présente l’interface de demande d’inscription.",
  src: "figure_demande_inscription.png"
};

window.chapterFigures.paiement = {
  title: "Interface de paiement",
  caption: "Cette figure présente l’interface de paiement.",
  src: "figure_paiement.png"
};

window.chapterFigures.messagerieParent = {
  title: "Messagerie côté parent",
  caption: "Cette figure présente l’interface de messagerie dans l’espace parent.",
  src: "figure_messagerie_parent.png"
};

window.chapterFigures.gestionOffres = {
  title: "Gestion des offres",
  caption: "Cette figure présente l’interface de gestion des offres côté crèche.",
  src: "figure_gestion_offres.png"
};

window.chapterFigures.consultationDemandes = {
  title: "Consultation des demandes d’inscription",
  caption: "Cette figure présente l’interface de consultation des demandes d’inscription.",
  src: "figure_consultation_demandes.png"
};

window.chapterFigures.gestionInscriptions = {
  title: "Gestion des inscriptions",
  caption: "Cette figure présente l’interface de gestion des inscriptions.",
  src: "figure_gestion_inscriptions.png"
};

window.chapterFigures.messagerieCreche = {
  title: "Messagerie côté crèche",
  caption: "Cette figure présente l’interface de messagerie dans l’espace crèche.",
  src: "figure_messagerie_creche.png"
};

window.chapterFigures.espaceAdministrateur = {
  title: "Espace administrateur",
  caption: "Cette figure présente l’interface de l’espace administrateur.",
  src: "figure_espace_administrateur.png"
};

window.chapterData.chapitre5 = {
  small: "Chapitre V",
  title: "Présentation de l’application",
  desc: "Ce chapitre présente les principales interfaces de l’application Kidly et montre l’organisation générale des espaces destinés aux différents utilisateurs.",
  body: `
    <div class="reader-section">
      <h4>V.1 Introduction</h4>
      <p>
        Dans ce chapitre, nous présentons les principales interfaces de l’application <strong>Kidly</strong>. Cette partie a pour objectif de montrer concrètement le résultat obtenu à travers les différents écrans conçus pour les utilisateurs de la plateforme.
      </p>
      <p>
        Elle permet ainsi d’illustrer l’organisation générale de l’application, la manière dont les espaces sont structurés ainsi que l’enchaînement de certaines fonctionnalités importantes.
      </p>
    </div>

    <div class="reader-section">
      <h4>V.2 Page d’accueil</h4>
      <p>
        La page d’accueil constitue le premier point d’entrée dans l’application. Elle permet à l’utilisateur d’avoir un premier aperçu de la plateforme et d’accéder aux différentes actions principales.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="pageAccueil">Voir la page d’accueil</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.3 Interface d’authentification</h4>
      <p>
        L’interface d’authentification permet à l’utilisateur de s’inscrire ou de se connecter à son compte. Elle constitue une étape essentielle, car elle permet de sécuriser l’accès à l’application et d’orienter chaque utilisateur vers son propre espace selon son rôle.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="authentification">Voir l’interface d’authentification</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.4 Espace parent</h4>
      <p>
        L’espace parent regroupe les fonctionnalités destinées aux familles. Il permet au parent d’effectuer plusieurs opérations liées à la recherche d’une crèche, à la gestion des enfants et au suivi de l’inscription.
      </p>
    </div>

    <div class="reader-section">
      <h4>V.4.1 Recherche et consultation des crèches</h4>
      <p>
        Cette interface permet au parent de consulter les offres disponibles et de rechercher une crèche selon plusieurs critères. Elle facilite la comparaison entre les établissements et aide le parent à mieux choisir la structure qui correspond à ses besoins.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="rechercheCreches">Voir l’interface de recherche</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.4.2 Gestion des enfants et des documents</h4>
      <p>
        L’application permet également au parent d’ajouter les informations de son enfant et de gérer les documents nécessaires à l’inscription. Cette fonctionnalité permet de centraliser les données utiles dans un espace unique.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="gestionEnfantsDocuments">Voir la gestion des enfants et documents</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.4.3 Demande d’inscription</h4>
      <p>
        L’interface de demande d’inscription permet au parent de soumettre une demande à une crèche après avoir choisi une offre adaptée. Elle constitue une étape centrale dans le fonctionnement de la plateforme.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="demandeInscription">Voir la demande d’inscription</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.4.4 Paiement</h4>
      <p>
        L’application offre également une interface liée au paiement, permettant au parent d’effectuer le règlement selon les modalités prévues dans le système.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="paiement">Voir l’interface de paiement</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.4.5 Messagerie</h4>
      <p>
        L’espace parent comprend enfin une interface de messagerie permettant de communiquer avec la crèche. Cette fonctionnalité facilite les échanges et améliore la continuité de la communication entre les deux parties.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="messagerieParent">Voir la messagerie parent</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.5 Espace crèche</h4>
      <p>
        L’espace crèche est destiné à la gestion des services proposés par l’établissement. Il permet à la crèche d’administrer ses offres, ses demandes et plusieurs aspects liés à l’inscription des enfants.
      </p>
    </div>

    <div class="reader-section">
      <h4>V.5.1 Gestion des offres</h4>
      <p>
        Cette interface permet à la crèche de publier, modifier ou supprimer une offre. Elle constitue un espace important, car les offres représentent le point de départ du parcours d’inscription dans l’application.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="gestionOffres">Voir la gestion des offres</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.5.2 Consultation des demandes d’inscription</h4>
      <p>
        La crèche dispose d’une interface lui permettant de consulter les demandes envoyées par les parents. À partir de cet espace, elle peut analyser les demandes reçues et décider de leur traitement.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="consultationDemandes">Voir la consultation des demandes</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.5.3 Gestion des inscriptions</h4>
      <p>
        Après le traitement des demandes, la crèche peut gérer les inscriptions dans une interface dédiée. Cet espace permet d’assurer un meilleur suivi des enfants admis.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="gestionInscriptions">Voir la gestion des inscriptions</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.5.4 Communication avec les parents</h4>
      <p>
        Comme dans l’espace parent, une interface de messagerie est également disponible pour la crèche. Elle permet de maintenir un lien direct avec les familles et d’assurer un meilleur échange d’informations.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="messagerieCreche">Voir la messagerie crèche</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.6 Espace administrateur</h4>
      <p>
        L’espace administrateur est consacré à la supervision globale de la plateforme. Il permet d’assurer le suivi général de l’application et de contrôler certains éléments nécessaires à son bon fonctionnement.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="espaceAdministrateur">Voir l’espace administrateur</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>V.7 Conclusion</h4>
      <p>
        À travers ce chapitre, nous avons présenté les principales interfaces de l’application <strong>Kidly</strong>. Cette présentation permet d’illustrer concrètement le fonctionnement du système et de montrer comment les différents espaces ont été organisés pour répondre aux besoins des utilisateurs.
      </p>
    </div>
  `
};