# History

PDF currently supports two different methods for integrating data and PDF forms.
Both formats today coexist in the PDF specification:

AcroForms (also known as Acrobat forms), introduced in the PDF 1.2 format specification and included in all later PDF specifications. Adobe XML Forms Architecture (XFA) forms, introduced in the PDF 1.5 format specification.

Adobe XFA Forms are not compatible with AcroForms. [XFA was deprecated from PDF with PDF 2.0 specification](https://www.pdflib.com/pdf-knowledge-base/pdf-20/deprecated-features/).

## PDF Types

PDF documents generally come in two flavors; Acroforms or XFA Forms.

Acroforms:

- The original PDF implementation, PDF based syntax
- Widely support by javascript, implemented by major browsers

XFA (XML Forms Architecture):

- Does not use PDF syntax
- Comes in two different types
  - Static XFA - produces a fixed layout of a form
  - Dynamic XFA - produces a variable arrange of form fields and a variable number of pages depending on data provided
- Not widely support by PDF viewing application, popular via Adobe authoring tools

## Releases

| PDF Version     | Release  | Summary Release           | ISO specification |
| --------------- | -------- | ------------------------- | ----------------- |
| 1.0             | Nov 1992 | Adobe Acrobat 1.0         |                   |
| 1.1             | Nov 1994 | Adobe Acrobat 2.0         |                   |
| 1.2             | Nov 1996 | Support for Acroforms     |                   |
| 1.3             | Apr 1999 | Digital Signature         |                   |
| 1.4             | May 2001 | Adobe Acrobat 5.0         |                   |
| 1.5             | Apr 2003 | Introduction for XFA      |                   |
| 1.6             | Jan 2005 | XML Forms and enhancement |                   |
| 1.7             | Oct 2006 | Adobe Acrobat 8.0         | ISO 32000-1       |
| 1.7 Ext Level 3 | 2008     | 256-bit AES encryption    |                   |
| 1.7 Ext Level 5 | 2009     | XFA 3.0                   |                   |
| 2.0             | Aug 2017 | Depreciate XFA            | ISO 32000-2       |

## Adobe's trends

Adobe is planning on [depreciating their LifeCycle Designer](https://helpx.adobe.com/support/adobe-livecycle-end-of-core-support.html) and replacing it with [Adobe Experience Manager Forms](https://www.adobe.com/marketing/experience-manager-forms.html).

Adobe LifeCycle Designer may be used to continue to produce all types of PDFs.

It is also possible to change a Dynamic XFA to a Static XFA according to [Google Group thread on LifeCycle](https://groups.google.com/g/livecycle/c/-psSfqeZL4s).

```
Static PDF – A PDF which contains an XFA stream and the form layout does not change. Static forms may be interactive (a user can still fill in fields).

If a dynamic XDP is rendered with LiveCycle Forms with the Render At Client option set to “No” then the resulting PDF is no longer dynamic – it is now static and behaves like any other static PDF.
```

## Browser trends

Every major browser has their own version of a built-in PDF viewers.

Major browsers supports [Acroforms and not XFA based forms](https://helpx.adobe.com/livecycle/kb/xfa-forms-firefox-chrome.html) and has [disabled the Adobe NPAPI plugin](https://helpx.adobe.com/aem-forms/kb/discontinuation-of-npapi-plugins-impact-on-aem-forms.html) when shipping the browser, causing more headaches in rendering forms.

To major browsers, it was likely removed because Adobe XFA format is a proprietary format that never made it as part of PDF specification, and adding it as part of their browser could have underlying repercussions.

Firefox now includes an [embedded PDF viewer](https://support.mozilla.org/en-US/kb/view-pdf-files-firefox-or-choose-another-viewer) with the ability to fill out forms via an open source library known as [PDF.js](https://mozilla.github.io/pdf.js/).

## References

- [PDF versions](https://www.prepressure.com/pdf/basics/version)

- [Wikipedia](https://en.wikipedia.org/wiki/PDF)

- [Adobe Lifecycle 11.0](https://help.adobe.com/en_US/livecycle/11.0/ddxRef.pdf)
