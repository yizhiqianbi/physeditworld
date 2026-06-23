# Code release

This directory is reserved for the PhysEditWorld code release.

Planned contents:

- UE5 DataFactory editor plug-in
- replay capture and physical-configuration generation scripts
- Movie Render Graph batch rendering wrappers
- cleaning and canonical dataset export tools
- evaluation scripts for gravity-conditioned generation and VLM gravity prediction

The paper describes the expected command-line entry point:

```bash
uv run --with pyyaml python Scripts/cli.py \
  --config Scripts/configs/base.yaml \
  --dry-run
```

The final code layout will be updated when the release is ready.
