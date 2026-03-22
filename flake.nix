{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux"; # adjust if using arm (aarch64-linux)
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_24
          pkgs.nodePackages.npm
        ];

        shellHook = ''
          # Set up nix-ld for dynamically linked executables
          # This allows fnm to work if you choose to use it with: eval "$(fnm env)"
          export NIX_LD=$(cat ${pkgs.stdenv.cc}/nix-support/dynamic-linker)
          export NIX_LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath [
            pkgs.stdenv.cc.cc
            pkgs.glibc
            pkgs.zlib
            pkgs.libgcc
          ]}
        '';
      };
    };
}
