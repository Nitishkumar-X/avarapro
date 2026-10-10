# Additional photos

Run these 2 numbered SQL files in order to add the 39 newly sourced destination photos. Each file is under 48 KiB. This works after the original seed or the expanded catalogue import. It adds missing destination rows needed by these photos and does not modify personal records. Safe to rerun. No schema migration is needed.

- 01-photos.sql
- 02-photos.sql

You can finish your original catalogue batches independently. A fresh full import should use the regenerated 25 files in ../sql-editor instead.
