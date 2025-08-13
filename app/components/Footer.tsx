export default function Footer() {
    return (
      <footer className="text-center text-sm text-muted-foreground bg-background py-2">
        &copy; {new Date().getFullYear()} Alessio Oliviero. All rights reserved.
      </footer>
    );
  }