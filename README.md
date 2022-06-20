<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/DanOsad/Ethereum-Wallet-API">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Ethereum Wallet API</h3>

  <p align="center">
    A tool for reading data from the Ethereum blockchain.
    <br />
    <a href="https://github.com/DanOsad/Ethereum-Wallet-API"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://eth.osadtsuk.com/">View Demo</a>
    ·
    <a href="https://github.com/DanOsad/Ethereum-Wallet-API/issues">Report Bug</a>
    ·
    <a href="https://github.com/DanOsad/Ethereum-Wallet-API/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

A simple API with only one route built on Express.js. It's purpose is to provide some simple, but useful, data to those working with wallet data on the Ethereum blockchain. An etherscan API key is required to use this API.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://etherscan.io/](https://etherscan.io/apis)
2. Clone the repo
   ```sh
   git clone https://github.com/DanOsad/Ethereum-Waller-API.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env`
   ```
   KEY = 'ENTER YOUR API KEY'
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can access the API through a simple URL HTTP request by adding comma seperated ethereum wallet addresses like so:

```
https://eth-parallel-api.herokuapp.com/api/ethereum,addresses,here
```

The API returns a JSON object filled with objects. Each wallet address is it's own key, and it's returned and calculated properties are the balance in ETH (converted from WEI) and it's current value in USD (at the time of access).

```
{
    "wallet-address":{
        "balance": 0000,
        "value": 0000,
    },
    "wallet-address2":{
        "balance": 0000,
        "value": 0000,
    },
}
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Store wallet addresses accessed by user, along with their date-of-access and value at that time
- [ ] Retrieve and display historical value data on commonly accessed wallet addresses

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Daniel Osadtsuk - [@DanOsad](https://twitter.com/DanOsad) - email@email_client.com

Project Link: [https://github.com/DanOsad/Ethereum-Wallet-API](https://github.com/DanOsad/Ethereum-Wallet-API)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/DanOsad/Ethereum-Wallet-API.svg?style=for-the-badge
[contributors-url]: https://github.com/DanOsad/Ethereum-Wallet-API/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/DanOsad/Ethereum-Wallet-API.svg?style=for-the-badge
[forks-url]: https://github.com/DanOsad/Ethereum-Wallet-API/network/members
[stars-shield]: https://img.shields.io/github/stars/DanOsad/Ethereum-Wallet-API.svg?style=for-the-badge
[stars-url]: https://github.com/DanOsad/Ethereum-Wallet-API/stargazers
[issues-shield]: https://img.shields.io/github/issues/DanOsad/Ethereum-Wallet-API.svg?style=for-the-badge
[issues-url]: https://github.com/DanOsad/Ethereum-Wallet-API/issues
[license-shield]: https://img.shields.io/github/license/DanOsad/Ethereum-Wallet-API.svg?style=for-the-badge
[license-url]: https://github.com/DanOsad/Ethereum-Wallet-API/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dan-osadtsuk/
[product-screenshot]: https://i.imgur.com/KbuXTkx.png