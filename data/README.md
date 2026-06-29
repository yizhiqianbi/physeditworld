# PhysEditWorld Data

This directory documents the expected dataset layout, metadata contract, and release checklist for PhysEditWorld. Download links and subset manifests will be added here as data packages become available.

## Data Access

- Dataset page: https://www.modelscope.cn/datasets/GelerCAT/PhysicalWorld
- Git clone endpoint: `https://www.modelscope.cn/datasets/GelerCAT/PhysicalWorld.git`

```bash
git clone https://www.modelscope.cn/datasets/GelerCAT/PhysicalWorld.git
```

## Release Packages

The release is planned as separate packages so users can choose the level of storage they need.

| Package | Contents | Status |
| --- | --- | --- |
| `sample-subset` | Small matched replay groups for schema inspection and dataloader tests | Planned |
| `rgb-videos` | Synchronized RGB videos for all released cameras | Planned |
| `aux-modalities` | Depth, normals, and object masks where available | Planned |
| `metadata` | Frame logs, time logs, physical configs, sample index, splits | Planned |
| `evaluation-splits` | Held-out replay groups and task-specific split files | Planned |

## Canonical Layout

```text
<dataset_root>/
  Details.json
  Video/
    <sample_id>/
      <camera_name>.mp4
  Meta/
    <sample_id>_meta_frame.csv
    <sample_id>_meta_time.csv
  PhysicalConfig/
    <physical_config_name>.json
  Aux/
    <aux_type>/
      <sample_id>/
        <camera_name>/
          <frame_id>.png
```

Each sample is one recording-rendering job under a fixed scene, action sequence, camera setup, and physical configuration.

## `Details.json`

`Details.json` is the global sample index. Paths are relative to the dataset root.

```json
{
  "sample_id": "00000000",
  "scene_name": "Map_MarsRover",
  "action_sequence_name": "MarsSequence_0001",
  "physical_config_name": "G_0.05",
  "physical_config_file": "PhysicalConfig/G_0.05.json",
  "frame_meta_file": "Meta/00000000_meta_frame.csv",
  "time_meta_file": "Meta/00000000_meta_time.csv",
  "camera_names": ["BK_Camera", "FL_Camera", "FP_Camera"],
  "aux_types": ["Depth", "Normals", "ObjectMask"],
  "cameras": [
    {
      "camera_name": "FP_Camera",
      "rgb_file": "Video/00000000/FP_Camera.mp4",
      "aux": {
        "Depth": "Aux/Depth/00000000/FP_Camera",
        "Normals": "Aux/Normals/00000000/FP_Camera",
        "ObjectMask": "Aux/ObjectMask/00000000/FP_Camera"
      },
      "resolution": {"width": 1280, "height": 720},
      "fps": 30
    }
  ]
}
```

## Required Fields

| Field | Meaning |
| --- | --- |
| `sample_id` | Unique sample identifier. |
| `scene_name` | UE5 level or environment name. |
| `action_sequence_name` | Replay action trace identifier. |
| `physical_config_name` | Human-readable physical configuration name, such as `G_0.05`. |
| `physical_config_file` | Relative path to the JSON physical-configuration descriptor. |
| `frame_meta_file` | Relative path to frame-indexed metadata. |
| `time_meta_file` | Relative path to event/time-indexed metadata. |
| `camera_names` | Available camera streams for the sample. |
| `aux_types` | Optional auxiliary modalities. |
| `cameras` | Per-camera RGB path, auxiliary paths, resolution, and FPS. |

## Modalities

- RGB videos from synchronized camera views.
- Depth maps, surface normals, and object masks when released.
- Audio when available from the rendered scene.
- Normalized action traces from UE5 Enhanced Input actions.
- Camera trajectories and engine-state logs in UE5 coordinate conventions.
- Physical configuration labels, currently centered on gravity multipliers.
- Per-clip captions generated from rendered frames.

## Validation Checklist

When data packages are available, a valid local copy should satisfy:

- every `rgb_file` in `Details.json` exists,
- every listed metadata file exists,
- every `physical_config_file` exists and includes the gravity multiplier,
- all videos for a matched replay group share the same FPS and frame count,
- frame metadata aligns with video frame indices,
- auxiliary modality folders exist for every listed `aux_type`.

Validation scripts will be added with the code release.
