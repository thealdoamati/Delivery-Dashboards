import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

export function StorieProfileDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button variant="ghost" type="button">
          Cancelar
        </Button>
        <Button type="submit" variant="success">
          Salvar
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
