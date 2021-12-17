/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              Taxan Info  
              </h2>
              <small>
                 Développée par
                 <Link href="building"> 
                  <a href="#">
                    <strong class="Primary"> Sahel Focus Management</strong>
                  </a>
                </Link>
              </small>
              
              
              <br className="my-6 border-blueGray-300" />

              
              <p className="mt-4 text-lg leading-relaxed text-black-500 text-justify">
                Taxan Info est une plateforme web qui permet aux organisations communautaires de base une gestion informatisée de leurs organisations mais surtout un suivi de leurs membres dans leurs activités et leurs conditions de vie. <br/>
                Il est conçu pour la collecte de l’information à la base, son traitement, son exploitation en interne par des requêtes imprimées  et sa diffusion sous forme de données statistiques vers les partenaires. Il s’agit d’une  application web, accessible soit par son portail grâce à un login et un mot de passe soit par installation en local chez le client.<br/> Une unité de coordination de programme ou une structure faitière peut à partir du portail disposer d’un espace privé où elle regroupe ses utilisateurs ou agents accrédités situés dans divers points de collecte de données.
              </p>
                <br className="my-6 border-blueGray-300" />
                <br className="my-6 border-blueGray-300" />
                <br className="my-6 border-blueGray-300" />
                <br className="my-6 border-blueGray-300" />
                <br className="my-6 border-blueGray-300" />
                <br className="my-6 border-blueGray-300" />
              
            </div>
          </div>
        </div>
        <img
          type="button"
          className="absolute top-0 b-auto right-0 pt-46 sm:w-6/12 -mt-48 sm:mt-0 w-12/12 max-h-400-px"
          src="/img/taxan/Land-in-Zim.png"
          alt="..."
          data-bs-toggle="popover" title="Taxan matt (collecte de bois): Votre portail Taxan Info (collecte de l’information)
          doit son nom à cette activité qui est une tâches quotidienne des femmes ruraux." data-bs-content=""/>

        <br className="my-6 border-blueGray-300" />
        <br className="my-6 border-blueGray-300" />
        <br className="my-6 border-blueGray-300" />
        <br className="my-6 border-blueGray-300" />
        <br className="my-6 border-blueGray-300" />
        <br className="my-6 border-blueGray-300" />
                 
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                {/* <img
                  alt="..."
                  src="/img/taxan/OnusidaBON2.jpg"
                  className="w-full align-middle rounded-t-lg"
                /> */}
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                  Un produit conçu et parfaitement adapté aux organisations communautaires
                  </h4>
                  {/* <p className="text-md font-light mt-2 text-white text-justify">
                   Taxan Info met à votre disposition une panoplie de fonctionnalité afin de vous fournir un espace de travail parfaitement adapté à la prise en charge de votre organisation. 
                  </p> */}
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  {/* <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Un espace utilisateurs  
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        qui affiche les modules et permet l’enregistrement des données et le tirage des requêtes.
                      </p>
                    </div>
                  </div> */}
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-black-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Un espace visiteurs
                      </h6>
                      <p className="mb-4 text-black-500 text-justify">
                        Un espace ouvert aux public et où sont affichées des statistiques générées par les données saisies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-black-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Un espace utilisateurs </h6>
                      <p className="mb-4 text-black-500 text-justify">
                        qui affiche les modules et permet l’enregistrement des données et le tirage des requêtes.
                      </p>
                    </div>
                  </div>
                  {/* <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Traitement des données
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Données saisies exploitées sous formes de requêtes imprimables ou statistiques. 
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-10">
              <div className="text-black-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Une dizaine de modules
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-black-600">
                Tous axés sur la sécurité alimentaire et la santé familiale.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Paramétrage du souscripteur
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Foncier:
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Agriculture 
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Commercialisation 
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Matériel Agricole 
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Elevage
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Les Equipements Collectifs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Santé Familiale
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  25 Novembre
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Transformation & Commercialisation des P.A
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Comptabilité
                </span>
              </div>
            </div>
          <div className="flex flex-wrap items-center pt-10">
            <div className="w-full md:w-8/12 px-4 mr-auto ml-auto mt-10">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-8 w-full lg:w-6/12 px-4">

                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white"
                        src="/img/taxan/parametrage.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Paramétrage du souscripteur <br/>
                        <em>
                          <small>
                            Enregistrements des cordonnées de l’association et celles des
                            membres.
                          </small>
                        </em>
                      </p>
                    </div>

   
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white"
                        src="/img/taxan/foncier.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Foncier <br/>
                        <em>
                          <small>
                            La délimitation, l’immatriculation et les attributions des lots, des concessions, des ménages,
                            des aménagements, des exploitations familiales
                          </small>
                        </em>
                      </p>
                    </div>
                  
   
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white"
                        src="/img/taxan/Agriculture.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Agriculture <br/>
                        <em>
                          <small>
                            Permet de suivre chaque producteur dans son acticité : Son calendrier de travail - Les intrants et le matériel utilisé - Les
                            quantités produites, vendues, stockées, transformées…
                          </small>
                        </em>
                      </p>
                    </div>
                  
   
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white"
                        src="/img/taxan/infrastructure.jpeg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Equipements Collectifs <br/>
                        <em>
                          <small>
                          Recensement des équipements collectifs et le suivi de leur utilisation.
                          </small>
                        </em>
                      </p>
                    </div>
                  
   
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white"
                        src="/img/taxan/TansfProd agri.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Transformation et Commercialisation des Produits Agricoles <br/>
                        <em>
                          <small>
                            Définition des charges des produits
                            pour élaborer le compte d’exploitation- la création des points de vente - le suivi des livraisons et des
                            versements.
                          </small>
                        </em>
                      </p>
                    </div>
                  
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
   
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-38 mx-auto p-2 bg-white"
                        src="/img/taxan/PRODUIT-AGRICOLE.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Commercialisation <br/>
                        <em>
                          <small>
                            Prise en charge des paramétres de quantité, de valeur, d'OPS, de date payement, de numéro quittance.
                          </small>
                        </em>
                      </p>
                    </div>
                  
   
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-38 mx-auto p-2 bg-white"
                        src="/img/taxan/matriel-agricole.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Matériel Agricole <br/>
                        <em>
                          <small>
                            Identification de l’ensemble du matériel dont dispose l’exploitant.
                          </small>
                        </em>
                      </p>
                    </div>
                  
   
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white"
                        src="/img/taxan/Elevage.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Elevage <br/>
                        <em>
                          <small>
                            L’immatriculation, la description et le suivi sanitaire de chaque bête - le recensement du
                            troupeau de chaque éleveur - la quantification de la production de lait et de viande - le suivi de
                            l’insémination artificielle - la gestion des maladies.
                          </small>
                        </em>
                      </p>
                    </div>
                  
   
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-38 mx-auto p-2 bg-white"
                        src="/img/taxan/Mortalité maternelle.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Santé Familiale: <br/>
                        <em>
                          <small>
                            Mortalité maternelle et infantile.
                          </small>
                        </em>
                      </p>
                    </div>
                  
   
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-38 mx-auto p-2 bg-white"
                        src="/img/taxan/25 novembre.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        25 Novembre <br/>
                        <em>
                          <small>
                            Violences basées sur le genre.
                          </small>
                        </em>
                      </p>
                    </div>
                  
   
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-32 mx-auto p-2 bg-white"
                        src="/img/taxan/comptabilité.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Comptabilité <br/>
                        <em>
                          <small>
                            Gestion de la trésorerie, à savoir la banque et la caisse – suivi budgétaire – la
                            gestion des cotisations et des prêts alloués aux membres.
                          </small>
                        </em>
                      </p>
                    </div>
                  
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Notus NextJS is a completly new product built using our past
              experience in web templates. Take the examples we made for you and
              start playing with them.
            </p>
          </div>
        </div> */}
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Nos partenaires
                  </h5>
                  <Link href="building"> 
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/taxan/org.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Maître d'Œuvre
                  </h5>
                  <Link href="building"> 
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/taxan/logo_fafssenegal.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Nos partenaires
                  </h5>
                  <Link href="building"> 
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/taxan/org.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <br className="my-6 border-blueGray-300" />
        <br className="my-6 border-blueGray-300" />
        <br className="my-6 border-blueGray-300" />
        <br className="my-6 border-blueGray-300" />
        <br className="my-6 border-blueGray-300" />
        <br className="my-6 border-blueGray-300" />
        <br/>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/img/taxan/dg.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>

              <h3 className="font-semibold text-3xl">
              Le Mot du Directeur Général
              </h3>
              <p className="text-black-500 text-lg leading-relaxed mt-4 mb-4 text-justify">
              De nos jours, il est inconcevable d’envisager une <strong>Emergence</strong> en dehors du concept de <strong>la bonne gouvernance</strong>. Il est aussi évident que la connaissance et la disponibilité de l’information sont à la base, à tous les niveaux, d’une administration  saine, vecteur d’un développement durable. C’est dans cette dynamique que le Cabinet d’étude Sahel Focus Management a développé le système d’information <strong>Taxan Info.</strong><br/>

              Les dix modules qui le composent lui confèrent une transversalité absolue, et un parfait ancrage dans les <strong>Objectifs du Développement Durable (ODD)</strong>. <br/>
              
              Axé sur <strong>la Sécurité Alimentaire, la Santé Familiale, la Lutte contre la Pauvreté</strong>, Taxan Info est ainsi destiné <strong>aux organisations Communautaires de base(OCB)</strong>, particulièrement les organisations de producteurs et les  groupements de femmes, chevilles ouvrières de développement durable. <br/>

              <em><strong>Qui détient l’information détient le pouvoir</strong></em>. Il est évident que Taxan Info rentre dans le cadre <strong>du renforcement de capacité</strong> des acteurs à la base. Cet outil aidera ces derniers à mieux asseoir une gestion de l’information et des ressources mises à leur disposition, de manière  plus efficiente et selon les normes édictées par l’Etat et les  partenaires techniques et financiers. <br/>

              Caractérisées par  leur dynamisme, leur rôle  de levier du développement, mais surtout par la faiblesse de leurs moyens, ces OCB ne pourraient  accéder au portail Taxan Info qu’avec des dispositions très particulières, dont la <strong>sponsorisation</strong>.<br/>

              Ainsi, nous invitons vivement les institutions étatiques et les partenaires techniques et financiers à accompagner la mise en service de la plateforme Taxan info, pour aider les OCB à mieux s'armer pour atteindre leurs objectifs en matière de développement.<br/>

              Bienvenue et nous vous souhaitons une bonne ceuillette d'information sur notre portail.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link href="./auth/login">
                 <a 
                  target="_blank"
                  style={{backgroundColor : '#14532d'}}
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                <i className="fas fa-sign-in-alt text-lg mr-1"></i>
                  Accéder à Taxan Info
                  </a>
                </Link>
                <a
                  href="https://download1493.mediafire.com/sy2o22xjxcpg/y3gryvei5o5n6wp/Formulaires.zip
                  "
                  target="_blank"
                  style={{backgroundColor : '#14532d'}}
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fas fa-arrow-alt-circle-down text-lg mr-1"></i>
                  <span>Bulletin de souscription
                  </span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
