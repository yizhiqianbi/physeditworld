# 🌍 PhysEditWorld

**PhysEditWorld: A Large-Scale Dataset Toward Physics-Editable World Models**

PhysEditWorld is a multimodal dataset for studying **editable physical rules** in game world models. The current release focuses on gravity: each matched replay group keeps the authored scene, initial state, action sequence, character controller, and camera policy fixed while replaying the scenario under different gravity configurations.

<p align="center">
  <a href="https://yizhiqianbi.github.io/physeditworld/"><strong>🌐 Project Page</strong></a> ·
  <a href="https://www.modelscope.cn/datasets/GelerCAT/PhysicalWorld"><strong>📦 ModelScope Dataset</strong></a> ·
  <a href="https://arxiv.org/abs/2606.26694"><strong>📄 arXiv</strong></a> ·
  <a href="data/"><strong>🗂️ Data Notes</strong></a> ·
  <a href="code/"><strong>🛠️ Code Notes</strong></a>
</p>

<p align="center">
  <img alt="Dataset" src="https://img.shields.io/badge/Dataset-PhysicalWorld-0f8f9e">
  <img alt="Platform" src="https://img.shields.io/badge/Platform-UE5-172033">
  <img alt="Physics" src="https://img.shields.io/badge/Editable_Physics-Gravity-f06f38">
  <img alt="Release" src="https://img.shields.io/badge/Release-Staged-blue">
</p>

## 📌 Table Of Contents

- [✨ Highlights](#-highlights)
- [📦 Data Access](#-data-access)
- [🧭 Dataset At A Glance](#-dataset-at-a-glance)
- [🚀 Quick Start](#-quick-start)
- [🗂️ Canonical Data Layout](#️-canonical-data-layout)
- [🧪 Evaluation Tasks](#-evaluation-tasks)
- [📁 Repository Layout](#-repository-layout)
- [🚧 Release Status](#-release-status)
- [⚖️ License And Asset Notes](#️-license-and-asset-notes)
- [📝 Citation](#-citation)

## ✨ Highlights

- **🎮 Matched physical interventions:** replay groups vary gravity while preserving scene, action trace, controller, and camera policy.
- **🧩 Game-native generation pipeline:** a UE5 replay-and-rendering workflow built around authored levels, Enhanced Input actions, camera rigs, Movie Render Queue exports, and frame-aligned engine logs.
- **🎥 Multimodal supervision:** RGB, depth, surface normals, audio when available, camera trajectories, action traces, character/object states, semantic captions, and explicit gravity labels.
- **📏 Physics-aware evaluation:** gravity-conditioned video generation, action-conditioned first-person world modeling, and gravity-aware video-language understanding.
- **🌐 Public dataset entry:** the dataset release is hosted through ModelScope under [GelerCAT/PhysicalWorld](https://www.modelscope.cn/datasets/GelerCAT/PhysicalWorld).

## 📦 Data Access

The PhysEditWorld dataset entry is available on ModelScope:

- **Dataset page:** https://www.modelscope.cn/datasets/GelerCAT/PhysicalWorld
- **Git clone endpoint:** `https://www.modelscope.cn/datasets/GelerCAT/PhysicalWorld.git`

```bash
# Clone the dataset repository from ModelScope.
git clone https://www.modelscope.cn/datasets/GelerCAT/PhysicalWorld.git
```

This GitHub repository hosts the project page, paper, documentation, and release notes. The ModelScope dataset page is the primary public entry for dataset packages as they are staged.

## 🧭 Dataset At A Glance

| Item | Current scope |
| --- | --- |
| 🎬 Scenes | 12 cinematic UE5 environments |
| ⏱️ Interaction scale | 100+ hours of gameplay interactions |
| 🖼️ Rendered data | 60M+ rollout frames |
| 🎥 Views | 8 synchronized camera views |
| 📐 Resolution / FPS | 1280 x 720 at 30 FPS |
| 🪐 Gravity multipliers | 0.05g, 0.1g, 0.5g, 1.0g, 2.0g, 5.0g, 20.0g |
| 🧾 Modalities | RGB, depth, normals, audio, actions, camera paths, engine states, captions, gravity labels |

## 🚀 Quick Start

Use this GitHub repository to inspect the expected schema and project documentation:

```bash
git clone https://github.com/yizhiqianbi/physeditworld.git
cd physeditworld

# Inspect the expected dataset contract.
sed -n '1,220p' data/README.md

# Inspect the expected code release entry points.
sed -n '1,220p' code/README.md
```

Use ModelScope for dataset access:

```bash
git clone https://www.modelscope.cn/datasets/GelerCAT/PhysicalWorld.git
```

When the example subset and full packages are finalized, this section will be updated with concrete download, integrity-check, and validation commands.

## 🗂️ Canonical Data Layout

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

## 🧪 Evaluation Tasks

PhysEditWorld is designed to support three first release tasks:

1. **Gravity-conditioned video generation:** condition a video/world model on a gravity multiplier and test whether generated motion follows the requested ordering.
2. **Action-conditioned first-person world modeling:** replay action traces from matched scenarios and test whether generated rollouts depart, fall, and land consistently under edited gravity.
3. **Gravity-aware video-language understanding:** predict coarse gravity class and continuous gravity multiplier from short gameplay clips.

The current project page reports initial utility studies. Full benchmark scripts and aggregate metrics will be added with the code release.

## 📁 Repository Layout

```text
.
├── README.md
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── PhysEditWorld.pdf
│   ├── demos/
│   │   ├── 00000002-group1.mp4
│   │   ├── 00000002-group2.mp4
│   │   └── ...
│   ├── overview.png
│   ├── pipeline.png
│   └── vlm_table.png
├── code/
│   └── README.md
└── data/
    └── README.md
```

## 🚧 Release Status

This repository is the public home for the PhysEditWorld project page and release materials. The release is being staged in parts:

| Component | Status | Notes |
| --- | --- | --- |
| 🌐 Project page | Available | Static GitHub Pages site in this repository. |
| 📦 ModelScope dataset entry | Available | See [GelerCAT/PhysicalWorld](https://www.modelscope.cn/datasets/GelerCAT/PhysicalWorld). |
| 📄 arXiv paper | Available | See [arXiv:2606.26694](https://arxiv.org/abs/2606.26694). |
| 🗂️ Dataset schema | Documented | See `data/README.md` for the canonical layout and metadata contract. |
| 🧪 Demo subset | Available on page | The project page shows representative MarsRover, CyberCity, and MoonWalk replay groups. |
| 🧱 Full dataset | Planned | Release depends on packaging, storage, and asset-license review. |
| 🛠️ UE5 pipeline code | Planned | Expected to include the DataFactory editor plugin, batch rendering wrappers, cleaning tools, and configs. |
| 📊 Evaluation scripts | Planned | Expected to cover gravity response metrics and VLM gravity prediction. |

Some third-party UE5 assets may have redistribution restrictions. When raw scene assets cannot be released directly, this repository will provide replacement assets, asset lists, or reconstruction instructions where possible.

## ⚖️ License And Asset Notes

The repository license will be finalized with the data/code release. Dataset users should expect separate terms for:

- project page and documentation,
- released code,
- generated videos and metadata,
- third-party UE5 assets or replacement asset lists.

Do not assume that commercial UE5 scene assets are redistributable unless they are explicitly included in the released package.

## 📝 Citation

If you use PhysEditWorld, please cite:

```bibtex
@misc{hu2026physeditworldlargescaledatasetphysicseditable,
      title={PhysEditWorld: A Large-Scale Dataset Toward Physics-Editable World Models},
      author={Bin Hu and Yanwen Ma and Jiehui Huang and Ziliang Zhang and Haoning Wu and Ruicheng Zhang and Yaokun Li and Zijun Wang and Yuechen Zhang and Chun-Mei Tseng and Hanhui Li and Shengju Qian and Jun Zhou and Kaipeng Zhang and Xiaodan Liang and Jiaya Jia and Xiu Li},
      year={2026},
      eprint={2606.26694},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2606.26694},
}
```
