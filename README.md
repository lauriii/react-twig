# react-twig

[![npm package](https://img.shields.io/npm/v/react-twig.svg?style=flat-square)](https://www.npmjs.org/package/react-twig)
[![Build Status](https://travis-ci.org/lauriii/react-twig.svg?branch=master)](https://travis-ci.org/lauriii/react-twig)

React wrapper-component for Twig. Can be used to render templates inside a react component.

## Usage

    import ReactTwig from 'react-twig'


    <ReactTwig template="Kittens say: {{ variable }}" data={{ variable: 'meow' }} />
