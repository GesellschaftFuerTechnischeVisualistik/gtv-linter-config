module.exports = {
  extends: [
    '@gtvmbh/eslint-config/eslint-config-ts'
  ],
  rules: {
    
    // enforces consistent usage of uppercase functions with new operator
    'new-cap': [
      'error', 
      { 
        'capIsNewExceptions': [
          // exceptions for angular decorators (@Component, @Input etc), array may be extended if needed.
          'Component', 'NgModule', 'ViewChild', 'Injectable', 'Input', 'Output', 'HostListener', 'Pipe', 'Inject', 'Directive', 'HostBinding'
        ]
      }
    ]
  }
};
