# PhysEditWorld

**PhysEditWorld: A Large-Scale Dataset Toward Physics-Editable World Models**

PhysEditWorld is a multimodal dataset for studying editable physical rules in game world models. The current release focuses on gravity: each matched replay group keeps the authored scene, initial state, action sequence, character controller, and camera policy fixed while replaying the scenario under different gravity configurations.

[Project page](https://yizhiqianbi.github.io/physeditworld/) · [Paper](assets/PhysEditWorld.pdf) · [Data notes](data/) · [Code notes](code/)

## What PhysEditWorld Provides

- **Matched physical interventions:** replay groups vary gravity while preserving scene, action trace, controller, and camera policy.
- **Game-native data generation:** a UE5 replay-and-rendering workflow built around authored levels, Enhanced Input actions, camera rigs, Movie Render Queue exports, and frame-aligned engine logs.
- **Multimodal observations:** RGB, depth, surface normals, audio when available, camera trajectories, action traces, character/object states, semantic captions, and explicit gravity labels.
- **Evaluation targets:** gravity-conditioned video generation, action-conditioned first-person world modeling, and gravity-aware video-language understanding.

## Dataset At A Glance

| Item | Current scope |
| --- | --- |
| Scenes | 12 cinematic UE5 environments |
| Interaction scale | 100+ hours of gameplay interactions |
| Rendered data | 60M+ rollout frames |
| Views | 8 synchronized camera views |
| Resolution / FPS | 1280 x 720 at 30 FPS |
| Gravity multipliers | 0.05g, 0.1g, 0.5g, 1.0g, 2.0g, 5.0g, 20.0g |
| Modalities | RGB, depth, normals, audio, actions, camera paths, engine states, captions, gravity labels |

## Release Status

This repository is the public home for the PhysEditWorld project page and release materials. The release is being staged in parts:

| Component | Status | Notes |
| --- | --- | --- |
| Project page | Available | Static GitHub Pages site in this repository. |
| Paper PDF | Available | See `assets/PhysEditWorld.pdf`. |
| Dataset schema | Documented | See `data/README.md` for the canonical layout and metadata contract. |
| Example subset | Planned | A small subset will be provided for dataloader and schema validation. |
| Full dataset | Planned | Release depends on packaging, storage, and asset-license review. |
| UE5 pipeline code | Planned | Expected to include the DataFactory editor plugin, batch rendering wrappers, cleaning tools, and configs. |
| Evaluation scripts | Planned | Expected to cover gravity response metrics and VLM gravity prediction. |

Some third-party UE5 assets may have redistribution restrictions. When raw scene assets cannot be released directly, this repository will provide replacement assets, asset lists, or reconstruction instructions where possible.

## Repository Layout

```text
.
├── README.md
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── PhysEditWorld.pdf
│   ├── hero-independent.png
│   ├── overview.png
│   ├── pipeline.png
│   └── vlm_table.png
├── code/
│   └── README.md
└── data/
    └── README.md
```

## Quick Start

The full data and code release is still being staged. Until the first public subset is uploaded, use the documentation in this repository to align dataloaders and evaluation code with the expected format.

```bash
git clone https://github.com/yizhiqianbi/physeditworld.git
cd physeditworld

# Inspect the expected dataset contract.
sed -n '1,220p' data/README.md

# Inspect the expected code release entry points.
sed -n '1,220p' code/README.md
```

When the example subset is released, this section will be updated with concrete download and validation commands.

## Canonical Data Layout

Each sample corresponds to one recording-rendering job under a fixed scene, action sequence, camera setup, and physical configuration.

```text
<dataset_root>/
  Video/<sample_id>/<camera_name>.mp4
  Meta/<sample_id>_meta_frame.csv
  Meta/<sample_id>_meta_time.csv
  PhysicalConfig/<physical_config_name>.json
  Aux/<aux_type>/<sample_id>/<camera_name>/<frame_id>.png
  Details.json
```

See [data/README.md](data/README.md) for the metadata fields and release checklist.

## Evaluation Tasks

PhysEditWorld is designed to support three first release tasks:

1. **Gravity-conditioned video generation:** condition a video/world model on a gravity multiplier and test whether generated motion follows the requested ordering.
2. **Action-conditioned first-person world modeling:** replay action traces from matched scenarios and test whether generated rollouts depart, fall, and land consistently under edited gravity.
3. **Gravity-aware video-language understanding:** predict coarse gravity class and continuous gravity multiplier from short gameplay clips.

The current project page reports initial utility studies. Full benchmark scripts and aggregate metrics will be added with the code release.

## License And Asset Notes

The repository license will be finalized with the data/code release. Dataset users should expect separate terms for:

- project page and documentation,
- released code,
- generated videos and metadata,
- third-party UE5 assets or replacement asset lists.

Do not assume that commercial UE5 scene assets are redistributable unless they are explicitly included in the released package.

## Citation

The citation will be updated when the manuscript record is finalized.

```bibtex
@misc{physeditworld2026,
  title = {PhysEditWorld: A Large-Scale Dataset Toward Physics-Editable World Models},
  author = {PhysEditWorld Team},
  year = {2026},
  note = {Project page and dataset release repository}
}
```
