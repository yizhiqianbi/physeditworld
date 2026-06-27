# PhysEditWorld Code

This directory documents the planned code release for the UE5 replay-and-rendering workflow and evaluation utilities. Source files will be added here as the release is packaged.

## Planned Components

| Component | Purpose |
| --- | --- |
| UE5 DataFactory editor plugin | Register scenes, controllers, camera rigs, physical configs, and replay settings. |
| Replay capture tools | Record semantic UE5 Enhanced Input action traces instead of raw device events. |
| Physical config generator | Create gravity and future physics-edit configuration files. |
| Batch rendering wrappers | Launch Movie Render Queue jobs with synchronized camera and modality exports. |
| Cleaning/export tools | Convert raw render outputs into the canonical dataset layout. |
| Evaluation scripts | Compute gravity-response metrics and run VLM gravity prediction tasks. |

## Expected Entry Points

The manuscript describes a repository-level CLI similar to:

```bash
uv run --with pyyaml python Scripts/cli.py \
  --config Scripts/configs/base.yaml \
  --dry-run
```

After inspecting the planned jobs, the full pipeline is expected to run with:

```bash
uv run --with pyyaml python Scripts/cli.py \
  --config Scripts/configs/base.yaml
```

The cleaning stage is expected to support a direct command:

```bash
uv run python Scripts/utools/clean_mrq_graph_dataset.py \
  <stage1_render_output_root> \
  --output-root <cleaned_dataset_root> \
  --physical-config-root <physical_config_root> \
  --workers 8 \
  --dataset-name <dataset_name>
```

## Expected Configuration Shape

```yaml
base_path: <project_root>
unreal_exe: <path_to_UnrealEditor>
dataset_path: <raw_dataset_root>
output_path: <cleaned_dataset_root>
input_sequence: <replay_csv_root>
physical_config: <physical_config_root>

scenes:
  - name: <scene_name>
    level_path: <unreal_level_asset_path>
    level_sequence_path: <unreal_level_sequence_asset_path>

job:
  selection: auto
  mrg_path: <movie_render_graph_asset_path>
  params:
    fps: 30
    resolution: [1280, 720]
    mp4: true

pipeline:
  render:
    enable: true
    auto_start: true
  clean:
    enable: true
    input_root: <stage1_render_output_root>
    output_root: <cleaned_dataset_root>
    physical_config_root: <physical_config_root>
    append: false
    workers: 8
    overwrite: false
    dataset_name: <dataset_name>
```

## Reproducibility Notes

The code release should make it possible to:

1. run a dry plan over scenes, replay trajectories, cameras, and physical configs;
2. render a small example replay group;
3. clean the raw render output into the documented dataset layout;
4. validate the generated `Details.json`;
5. run gravity-response evaluation on generated or released sample videos.

Exact environment files and dependency versions will be added with the source release.
