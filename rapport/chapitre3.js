window.chapterFigures = window.chapterFigures || {};

window.chapterFigures.casUtilisation = {
  title: "Diagramme de cas d’utilisation",
  caption: "Ce diagramme représente les principales interactions entre les acteurs et l’application Kidly.",
  src: "diagramme_cas_utilisation.png"
};

window.chapterFigures.diagrammeClasses = {
  title: "Diagramme de classes",
  caption: "Ce diagramme présente les principales classes du système et les relations entre elles.",
  src: "diagramme_classes.png"
};

window.chapterFigures.modeleRelationnel = {
  title: "Modèle relationnel",
  caption: "Ce schéma présente l’organisation logique des tables de la base de données de Kidly.",
  src: "modele_relationnel.png"
};

window.chapterData.chapitre3 = {
  small: "Chapitre III",
  title: "Conception",
  desc: "Ce chapitre présente la phase de conception de l’application Kidly à travers UML, le diagramme de cas d’utilisation, le diagramme de classes et le modèle relationnel.",
  body: `
    <div class="reader-section">
      <h4>III.1 Introduction</h4>
      <p>
        Dans ce chapitre, nous présentons la phase de conception de l’application <strong>Kidly</strong>. Cette étape permet de traduire les besoins identifiés auparavant en une structure plus claire, en représentant les fonctionnalités, les relations entre les éléments du système et l’organisation des données.
      </p>
    </div>

    <div class="reader-section">
      <h4>III.2 UML</h4>
      <p>
        UML, ou <em>Unified Modeling Language</em>, est un langage de modélisation qui permet de représenter un système logiciel sous plusieurs points de vue. Dans notre projet, il nous a aidés à visualiser les fonctionnalités principales de l’application ainsi que la structure générale du système.
      </p>
    </div>

    <div class="reader-section">
      <h4>III.3 Démarche de conception</h4>
      <p>
        La conception de <strong>Kidly</strong> a été menée de manière progressive. Nous avons d’abord représenté les fonctionnalités offertes aux utilisateurs à travers le diagramme de cas d’utilisation, puis nous avons modélisé la structure du système à l’aide du diagramme de classes, avant de passer à l’organisation logique des données à travers le modèle relationnel.
      </p>
    </div>

    <div class="reader-section">
      <h4>III.4 Diagramme de cas d’utilisation</h4>
      <p>
        Le diagramme de cas d’utilisation montre comment les différents acteurs interagissent avec l’application <strong>Kidly</strong>. On y trouve principalement trois acteurs internes : le <strong>Parent</strong>, la <strong>Crèche privée</strong> et l’<strong>Administrateur</strong>, auxquels s’ajoute la <strong>Banque</strong> comme acteur externe dans le cas du paiement bancaire.
      </p>
      <p>
        Le <strong>Parent</strong> utilise l’application pour rechercher une crèche, filtrer les résultats, consulter le profil d’une crèche, ajouter un enfant, gérer les documents de l’enfant et envoyer une demande d’inscription. Une fois la demande acceptée, il peut confirmer l’inscription puis effectuer le paiement. Le diagramme montre aussi que le paiement peut prendre plusieurs formes : <strong>CCP</strong>, <strong>carte bancaire</strong> ou <strong>espèces</strong>. Il met donc en évidence le fait que le parent est l’acteur principal du parcours d’inscription.
      </p>
      <p>
        La <strong>Crèche privée</strong>, de son côté, intervient dans la gestion de ses services. Elle peut publier, modifier ou supprimer une offre, puis consulter les demandes d’inscription reçues. À partir de ces demandes, elle peut accepter ou refuser l’inscription. Cela montre que la crèche joue un rôle de validation dans le système.
      </p>
      <p>
        L’<strong>Administrateur</strong> apparaît avec une fonction plus globale, puisqu’il intervient dans la <strong>supervision de l’application</strong>. Enfin, la <strong>Banque</strong> n’est pas liée à l’ensemble des fonctionnalités, mais uniquement au traitement des transactions bancaires. Ce diagramme montre donc clairement que Kidly couvre tout le processus, depuis la recherche d’une crèche jusqu’à l’inscription et au paiement.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="casUtilisation">Voir le diagramme de cas d’utilisation</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>III.5 Diagramme de classes</h4>
      <p>
        Le diagramme de classes représente la structure de l’application à travers les principales classes et les relations qui les relient. L’idée générale du diagramme est de montrer comment les données du système sont organisées et comment les objets principaux collaborent entre eux.
      </p>
      <p>
        On remarque d’abord que la classe <strong>Utilisateur</strong> occupe une place importante, car elle regroupe les informations communes liées au compte, comme l’e-mail, le mot de passe, le numéro de téléphone et le statut. À partir de cette base, on distingue ensuite des profils spécialisés, notamment le <strong>Parent</strong> et la <strong>CrèchePrivée</strong>, qui possèdent chacun leurs propres opérations. Cela montre que le système distingue bien les rôles selon les besoins de chaque acteur.
      </p>
      <p>
        Le <strong>Parent</strong> est lié à l’<strong>Enfant</strong>, ce qui traduit le fait qu’un parent peut gérer les informations de son enfant dans l’application. À partir de là, le parent peut faire une <strong>Demande</strong>, et cette demande concerne à la fois un <strong>Enfant</strong> et une <strong>Offre</strong>. Cette relation est très importante, car elle montre la logique centrale du système : un parent choisit une offre pour un enfant, puis envoie une demande liée à cette offre.
      </p>
      <p>
        Lorsqu’une demande est traitée positivement, elle devient une <strong>Inscription</strong>. Le diagramme montre ainsi une continuité logique entre <strong>Demande</strong>, <strong>Inscription</strong> et <strong>Paiement</strong>. Cela signifie que l’inscription n’est pas indépendante : elle vient après une demande, et elle peut ensuite générer un paiement. Cette organisation traduit bien le déroulement réel du processus dans l’application.
      </p>
      <p>
        La classe <strong>CrèchePrivée</strong> est reliée à plusieurs éléments importants. Elle gère les <strong>Offres</strong>, elle traite les <strong>Demandes</strong>, elle organise les <strong>Activités</strong> et elle est également liée au <strong>Transport</strong>. Cela montre que la crèche n’est pas limitée à la publication d’offres, mais qu’elle intervient dans plusieurs aspects du fonctionnement de la plateforme.
      </p>
      <p>
        Le diagramme met aussi en évidence des classes complémentaires. L’<strong>Enfant</strong> peut contenir des <strong>Documents</strong>, participer à des <strong>Activités</strong> et bénéficier d’un <strong>Transport</strong>. Du côté de la communication, une <strong>Conversation</strong> relie les échanges, et cette conversation contient des <strong>Messages</strong>. Enfin, la classe <strong>Notification</strong> permet d’informer l’utilisateur sur les événements importants. Ainsi, le diagramme de classes montre que Kidly est construit autour d’un ensemble cohérent couvrant l’inscription, le suivi, la communication et les services liés à l’enfant.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="diagrammeClasses">Voir le diagramme de classes</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>III.6 Modèle relationnel</h4>
      <p>
        Le modèle relationnel traduit la structure du système en tables de base de données. Il permet de voir comment les données seront stockées et reliées entre elles.
      </p>
      <p>
        On distingue d’abord les tables principales liées aux acteurs et aux comptes, comme <strong>Utilisateur</strong>, <strong>Parent</strong>, <strong>CrèchePrivée</strong> et <strong>Adresse</strong>. La présence de la table <strong>Adresse</strong> permet de séparer les informations de localisation du reste des données, ce qui rend l’organisation plus claire et évite la répétition inutile.
      </p>
      <p>
        Le cœur fonctionnel de la base repose ensuite sur les tables <strong>Enfant</strong>, <strong>Offre</strong>, <strong>Demande</strong>, <strong>Inscription</strong> et <strong>Paiement</strong>. Cette suite de tables reflète directement le fonctionnement de l’application : le parent enregistre un enfant, consulte une offre, envoie une demande, obtient éventuellement une inscription, puis effectue un paiement. C’est donc cette chaîne qui représente le noyau métier de Kidly.
      </p>
      <p>
        Le modèle relationnel intègre aussi les tables liées aux services complémentaires, comme <strong>Document</strong>, <strong>Conversation</strong>, <strong>Message</strong>, <strong>Notification</strong>, <strong>Activité</strong> et <strong>Transport</strong>. On remarque également la table <strong>Participer</strong>, qui sert de table d’association entre <strong>Enfant</strong> et <strong>Activité</strong>. Cela signifie qu’un enfant peut participer à plusieurs activités, et qu’une activité peut concerner plusieurs enfants. Ce choix montre que la base a été pensée pour gérer correctement les relations multiples entre certaines données.
      </p>
      <p>
        Dans l’ensemble, le modèle relationnel montre une base bien organisée, où chaque table joue un rôle précis et où les relations permettent de relier les comptes, les enfants, les inscriptions, les paiements et les échanges dans un même système cohérent.
      </p>

      <div class="diagram-actions">
        <button class="diagram-btn" data-figure="modeleRelationnel">Voir le modèle relationnel</button>
      </div>
    </div>

    <div class="reader-section">
      <h4>III.7 Conclusion</h4>
      <p>
        Ce chapitre a permis de présenter les principaux éléments de conception de l’application <strong>Kidly</strong>. À travers le diagramme de cas d’utilisation, le diagramme de classes et le modèle relationnel, nous avons pu représenter les fonctionnalités du système, sa structure générale ainsi que l’organisation logique de ses données. Cette étape prépare directement la réalisation technique de l’application.
      </p>
    </div>
  `
};