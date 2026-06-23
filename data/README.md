# Data release

This directory is reserved for dataset release notes, subset manifests, and download instructions.

The planned canonical dataset layout is:

```text
<dataset_root>/
  Video/<sample_id>/<camera_name>.mp4
  Meta/<sample_id>_meta_frame.csv
  Meta/<sample_id>_meta_time.csv
  PhysicalConfig/<physical_config_name>.json
  Aux/<aux_type>/<sample_id>/<camera_name>/<frame_id>.png
  Details.json
```

Each sample corresponds to one recording-rendering job under a fixed scene, action sequence, camera setup, and physical configuration.

Planned modalities:

- synchronized RGB videos
- depth maps
- surface normals
- gravity annotations
- camera trajectories
- action traces
- engine-state metadata
- evaluation splits and scripts
