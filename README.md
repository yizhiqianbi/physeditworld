# PhysEditWorld

Project page and release repository for:

**PhysEditWorld: A Large-Scale Dataset Toward Physics-Editable World Models**

PhysEditWorld is a multimodal dataset for physics-editable game world modeling. The current manuscript focuses on gravity as the first editable physical variable. Matched UE5 replay groups keep the scene, initial state, action sequence, character controller, and camera policy fixed while varying the physical configuration.

Project page: https://yizhiqianbi.github.io/physeditworld/

## Release status

This repository is prepared for the public release of:

- UE5 replay-and-rendering pipeline code
- dataset index and metadata schema
- example data subset
- evaluation scripts for gravity-conditioned generation and gravity-aware VLMs
- paper PDF and project page assets

Some third-party UE5 assets may have redistribution restrictions. When raw scene assets cannot be released directly, this repository will provide replacement assets, asset lists, or reconstruction instructions where possible.

## Repository layout

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── PhysEditWorld.pdf
│   ├── hero-overview.png
│   ├── overview.png
│   └── pipeline.png
├── code/
│   └── README.md
└── data/
    └── README.md
```

## Citation

```bibtex
@inproceedings{physeditworld2026,
  title = {PhysEditWorld: A Large-Scale Dataset Toward Physics-Editable World Models},
  author = {Anonymous Authors},
  booktitle = {Submitted to NeurIPS Datasets and Benchmarks Track},
  year = {2026}
}
```
