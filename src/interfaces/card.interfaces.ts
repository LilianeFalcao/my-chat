export interface cardSocialProps {
    children: JSX.Element
}

export interface cardProps {
    data: {
        id: number,
        nome: string,
        data: Date,
        titulo: string,
        mensagem: string,
        topico: {
          id: number,
          item: string
        }[]
      }
}