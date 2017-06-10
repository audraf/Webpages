// home controller
PersPagesApp.controller('HomeController', function ($scope) {
  $scope.name = "Frédéric Audra";
  $scope.title="Accueil";
  $scope.job_title = "Gestionnaire d'infrastructures";
  $scope.employer = "CNRS";
  $scope.missions_title = "Missions :";
  $scope.missions = "Gestion et maintenance du parc informatique, garantir la disponibilité des ressources, faire évoluer les services, conseil et support utilisateurs.";
  $scope.activites_title = "Activités :";
  $scope.activites = "- Administration des ressources de calcul\n- Développement web\n";
  $scope.contact_title = "Me contacter :";
  $scope.postal_address = "Laboratoire Jean Kuntzmann\nBâtiment IMAG\n700 avenue Centrale\n38400 Saint Martin d'Hères";
  $scope.office = "101";
  $scope.phone = "0457421701";
  $scope.mail = "Frederic.Audra (a) univ-grenoble-alpes.fr";
});

// about controller
PersPagesApp.controller('RealController', function ($scope) {
    $scope.title = "Réalisations";

});

// post controller
PersPagesApp.controller('ProjController', function ($scope) {

    $scope.title = "Projets";

    // define posts json
    $scope.posts =  [{
        "id": "1",
        "title": "Migration des listes de diffusion \"Sympa\"",
        "author": "Fred",
        "but": "Migration des listes de diffusion du laboratoire vers l'infrastructure UGA.",
        "extended": "Prise en compte des problèmatiques d'authentification sur l'interface web, de droits de postage, scripting de modifications de masse des abonnés.",
        "cadre": "LJK"
    },{
        "id": "2",
        "title": "Développement d'une solution d'inscription aux formations MaiMoSiNE",
        "author": "Fred",
        "but": "Permettre l'inscription aux formations MaiMoSiNE directement depuis le site web.",
        "extended": "Interaction avec l'API Rest des formations, traitement des données.",
        "cadre": "MaiMoSiNE"
    },{
        "id": "3",
        "title": "Tutoriel Nix pour le HPC",
        "author": "Fred",
        "but": "Rédaction, préparation du tutoriel sur Nix pour le HPC pour les JDEV 2017.",
        "extended": "Préparer un tutoriel sur l'installation et l'utilisation de NiX dans le HPC, à l'attention des utilisateurs et des administrateurs de cluster.",
        "cadre": "Gricad"
    }];


});
